const mongoose = require("mongoose");
const db = "pirates";

mongoose.connect("mongodb://localhost/" + db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the", db))
	.catch((err) =>
		console.log("Something went wrong when connecting to the database", err)
);