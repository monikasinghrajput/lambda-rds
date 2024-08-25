const { Country, State, City } = require("country-state-city");
const Location = require("./Location");

exports.getCountries = async (req, res) => {
  try {
    const countries = Country.getAllCountries().map((c) => ({
      name: c.name,
      code: c.isoCode,
    }));
    res.json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getStates = async (req, res) => {
  try {
    const { country } = req.query;

    if (!country) {
      return res.status(400).json({ error: "Country code is required" });
    }

    const countryData = Country.getCountryByCode(country);
    if (!countryData) {
      return res.status(404).json({ error: "Country not found" });
    }

    const states = State.getStatesOfCountry(country).map((s) => ({
      name: s.name,
      code: s.isoCode,
    }));

    res.json(states);
  } catch (error) {
    console.error("Error fetching states:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getCities = async (req, res) => {
  try {
    const { state, country } = req.query;

    if (!state || !country) {
      return res
        .status(400)
        .json({ error: "State and country codes are required" });
    }

    const countryData = Country.getCountryByCode(country);
    if (!countryData) {
      return res.status(404).json({ error: "Country not found" });
    }

    const stateData = State.getStateByCodeAndCountry(state, country);
    if (!stateData) {
      return res.status(404).json({ error: "State not found" });
    }

    const cities = City.getCitiesOfState(state, country);

    // Save or update cities in the database
    if (cities.length > 0) {
      for (const city of cities) {
        await Location.upsert({
          countryName: countryData.name,
          countryCode: countryData.isoCode,
          stateName: stateData.name,
          stateCode: stateData.isoCode,
          cityName: city.name,
        });
      }
    }

    if (cities.length === 0) {
      return res.status(200).json({
        stateName: stateData.name,
        stateCode: stateData.isoCode,
        countryName: countryData.name,
        countryCode: countryData.isoCode,
        message: "No cities found for this state",
        cities: [],
      });
    }

    const response = {
      stateName: stateData.name,
      stateCode: stateData.isoCode,
      countryName: countryData.name,
      countryCode: countryData.isoCode,
      cities: cities.map((city) => ({
        name: city.name,
        code: city.isoCode,
      })),
    };

    res.json(response);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
