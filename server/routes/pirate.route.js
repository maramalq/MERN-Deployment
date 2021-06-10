const PirateController = require("../controllers/pirate.controller");

// routes is similar to urls.py
module.exports = (app) => {
  // different routes for the endpoints to match Controller
  // Create
	app.post("/api/pirate", PirateController.createPirate );
	// Read
	// Get All
	app.get("/api/pirate", PirateController.getAll );
	// Get One
	app.get("/api/pirate/:id", PirateController.getOne );
	// Update
	app.put("/api/pirate/:id", PirateController.updatePirate );
	// Delete
	app.delete("/api/pirate/:id", PirateController.deletePirate );
};