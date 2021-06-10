const Pirate = require("../models/pirate.model");

module.exports = {

	// 1. create new author function
	createPirate: (req, res) => {
		//const { name, image, treasure, catch, position, pegLeg, eyePatch, hookHand } = req.body
		Pirate.create(req.body)
			.then((pirate) => res.json(pirate))
			.catch(err => res.status(400).json(err))
	},

	// 2. get all authors function
	getAll: (req, res) => {
		Pirate.find()
			.then((pirates) => res.json(pirates))
			.catch((err) => res.status(400).json(err));
	},

	// 3. get one author function
	getOne: (req, res) => {
		Pirate.findOne({ _id: req.params.id })
			.then((pirate) => res.json(pirate))
			.catch((err) => res.status(400).json(err));
	},

	// 4. upadate one author information function
	updatePirate: (req, res) => {
		Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true, })
			.then((pirateUpdated) => res.json(pirateUpdated))
			.catch((err) => res.status(400).json(err));
	},

	// 5. delete on author function
	deletePirate: (req, res) => {
		Pirate.deleteOne({ _id: req.params.id })
			.then((pirateDeleted) => res.json(pirateDeleted))
			.catch((err) => res.status(400).json(err));
	}

}