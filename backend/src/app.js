const express = require("express");
const app = express();

const equipmentRoutes = require("./routes/equipmentsRoutes");
app.use("/equipments", equipmentRoutes);

module.exports = app;