const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/data-source");
const cors = require("cors");
const passport = require("./config/auth");
const awsServerlessExpress = require('aws-serverless-express');
const path = require('path');

// Import route modules
const userRouter = require("./api/user/user-route");
const candidateRouter = require("./api/candidate/candidate-route");
const candidateAddressRouter = require("./api/candidate-address/candidate-address-route");
const candidateCibilRouter = require("./api/candidate-cibil/candidate-cibil-route");
const candidateDocsRouter = require("./api/candidate-docs/candidate-docs-route");
const candidateEductionRouter = require("./api/candidate-eduction/candidate-eduction-route");
const candidateReferenceRouter = require("./api/candidate-reference/candidate-reference-route");
const candidateVerificationRouter = require("./api/candidate-verification/candidate-verification-route");
const clientRouter = require("./api/client/client-route");
const featureRouter = require("./api/feature/feature-route");
const internalTeamRouter = require("./api/internal-team/internal_team-route");
const locationRouter = require("./api/locationCSC/locationRoutes");
const WorkingRouter = require("./api/WorkingExperiance/work-experience-routes");
const FatherRouter = require("./api/fatherdoc/fathers-documents-routes");
const TeamregRouter = require("./api/TeamRegistration/teamRoutes");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Sync database
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

// Define routes
app.use("/_alive", (req, res) => res.status(200).send("Welcome to vitsinco.com"));
app.use("/users", userRouter);
app.use("/candidate", candidateRouter);
app.use("/candidate-address", candidateAddressRouter);
app.use("/candidate-cibil", candidateCibilRouter);
app.use("/candidate-docs", candidateDocsRouter);
app.use("/candidate-education", candidateEductionRouter);
app.use("/candidate-reference", candidateReferenceRouter);
app.use("/candidate-verification", candidateVerificationRouter);
app.use("/client", clientRouter);
app.use("/feature", featureRouter);
app.use("/internal-tea", internalTeamRouter);  // Ensure this path is correct
app.use("/location", locationRouter);
app.use("/workingExp", WorkingRouter);
app.use("/fathers-document", FatherRouter);
app.use("/internal-team", TeamregRouter);

// Create AWS Serverless Express server
const server = awsServerlessExpress.createServer(app);

// Lambda handler function
exports.handler = (event, context) => {
  console.log("Event:", JSON.stringify(event, null, 2)); // Log the event for debugging
  return awsServerlessExpress.proxy(server, event, context);
};

// Optional: For local testing
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server  running on http://localhost:${port}`);
  });
}
