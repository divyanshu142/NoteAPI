const express = require("express");
const { GetNote, CreateNote, DeleteNote, UpdateNote } = require("../Controllers/noteController");
const  auth  = require("../middlewares/auth");
const noteRoutes = express.Router();

noteRoutes.get("/", auth, GetNote);

noteRoutes.post("/", auth, CreateNote);

noteRoutes.delete("/:id", auth, DeleteNote);

noteRoutes.put("/:id", auth, UpdateNote);

module.exports = noteRoutes;
