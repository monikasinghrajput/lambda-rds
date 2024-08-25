const Team = require("./team");
const REST_API = require("../../util/api-util");
const mailer = require("../../config/mailer");
const User = require("../user/user");

const roles = {
  2: "ClientTeam",
  3: "CandidateTeam",
  4: "EducationTeam",
  5: "AddressTeam",
  6: "ExperienceTeam",
};

const createTeam = async (req, res) => {
  try {
    const {
      email_id: teamEmail,
      user_role,
      mobile_number,
      token,
      process_list,
    } = req.body;

    if (!teamEmail) {
      return res
        .status(400)
        .json({ msg: "Email is required", isError: "true" });
    }

    const [existingTeam, teamResponse] = await Promise.all([
      Team.findOne({ where: { email_id: teamEmail } }),
      REST_API._add(req, res, Team),
    ]);

    if (existingTeam) {
      return res
        .status(400)
        .json({ msg: "Email already exists", isError: "true" });
    }

    const userObj = {
      username: teamEmail,
      password: mobile_number,
      user_role: user_role,
      email: teamEmail,
      user_source_id: teamResponse.id,
    };

    if (user_role >= 2 && user_role <= 6) {
      const fieldMap = {
        2: "client_id",
        3: "candidate_id",
        4: "education_team_id",
        5: "address_team_id",
        6: "experience_team_id",
      };
      userObj[fieldMap[user_role]] = teamResponse.id;
    }

    const [userResponse] = await Promise.all([
      User.create(userObj),
      sendWelcomeEmail(teamEmail, teamResponse.id, mobile_number, user_role),
    ]);

    const responseWithRole = {
      ...teamResponse.toJSON(),
      user_role: user_role,
    };

    res.status(200).json(responseWithRole);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error", isError: "true" });
  }
};

const sendWelcomeEmail = (email, teamId, password, user_role) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "info@vitsinco.com",
      to: email,
      subject: "Welcome to Our Service",
      html: `
        <p>Dear ${email},</p>
        <p>Your team has been created successfully.</p>
        <p>Username: ${email}</p>
        <p>Password: ${password}</p>
        <p>Role: ${roles[user_role] || `Role${user_role}`}</p>
        <p><a href="dashboard.vitsinco.com/auth/login?id=${teamId}">Login</a></p>
      `,
    };

    mailer.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        reject(error);
      } else {
        console.log("Message sent: %s", info.messageId);
        resolve(info);
      }
    });
  });
};

const getAllTeams = async (req, res) => {
  try {
    const response = await REST_API._getAll(req, res, Team);
    const teamsWithRoles = response.map((team) => {
      const teamData = team.toJSON ? team.toJSON() : team;
      if (teamData.process_list) {
        teamData.process_list = teamData.process_list.split(",");
      }
      teamData.user_role =
        roles[teamData.user_role] || `Role${teamData.user_role}`;
      return teamData;
    });
    res.status(200).json(teamsWithRoles);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ msg: "Internal server error", isError: "true" });
  }
};

const getTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await REST_API._getDataListById(req, res, Team, "id", id);
    if (!response) {
      return res.status(404).json({ msg: "Team not found", isError: "true" });
    }
    const teamData = response.toJSON ? response.toJSON() : response;
    if (teamData.process_list) {
      teamData.process_list = teamData.process_list.split(",");
    }
    teamData.user_role =
      roles[teamData.user_role] || `Role${teamData.user_role}`;
    res.status(200).json(teamData);
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({ msg: "Internal server error", isError: "true" });
  }
};

const updateTeam = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res
        .status(400)
        .json({ msg: "Team ID is required", isError: "true" });
    }

    if (req.body.process_list && Array.isArray(req.body.process_list)) {
      req.body.process_list = req.body.process_list.join(",");
    }

    const team = await Team.findByPk(id);
    if (!team) {
      return res.status(404).json({ msg: "Team not found", isError: "true" });
    }

    const updatedTeam = await team.update(req.body);
    const teamData = updatedTeam.toJSON();

    if (teamData.process_list) {
      teamData.process_list = teamData.process_list.split(",");
    }
    teamData.user_role =
      roles[teamData.user_role] || `Role${teamData.user_role}`;

    res.status(200).json(teamData);
  } catch (error) {
    console.error("Error updating team:", error);
    res.status(500).json({ msg: "Internal server error", isError: "true" });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res
        .status(400)
        .json({ msg: "Team ID is required", isError: "true" });
    }

    const team = await Team.findByPk(id);
    if (!team) {
      return res.status(404).json({ msg: "Team not found", isError: "true" });
    }

    await team.destroy();
    res.status(200).json({ msg: "Team deleted successfully" });
  } catch (error) {
    console.error("Error deleting team:", error);
    res.status(500).json({ msg: "Internal server error", isError: "true" });
  }
};

module.exports = {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeam,
  deleteTeam,
};
