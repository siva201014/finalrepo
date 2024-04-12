const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  session: {
    creation_date: {
      type: Date,
      require: true,
    },
    ip: {
      type: String,
      require: true,
    },
    github_id: {
      type: String,
      require: true,
    },
    session_id: {
      type: String,
      require: true,
    },
  },
});

module.exports = mongoose.model("sessions", DataSchema, "sessions");
