const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Pirate Name is required"],
			minlength: [3, "Pirate Name must be at least 3 characters long"]
		},
		image: {
			type: String,
			required: [true, "Pirate Image is required"],
			minlength: [3, "Pirate Image must be at least 3 characters long"]
		},
		treasure: {
			type: Number,
			required: [true, "Treasure is required"]
		},
		catch: {
			type: String,
			required: [true, "Position is required"]
		},
		position: {
			type: String,
			required: [true, "Position is required"]
		},
		pegLeg: {
			type: Boolean,
			required: [true, "{PATH} is required"]
		},
		eyePatch: {
			type: Boolean,
			required: [true, "{PATH} is required"]
		},
		hookHand: {
			type: Boolean,
			required: [true, "{PATH} is required"]
		},
	}, { timestamps: true }
);


const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate