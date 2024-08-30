const express = require("express"); // imports the Express Library to handle HTTP requests
const mongoose = require("mongoose"); // imports Mongoose to manage MongoDB connections and schema
const productRoute = require("./routes/product.route.js");    //import productroute
const app = express(); // initializes an Express application instance


//Midlleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({extended: false}));  // handle URL-encoded form data in HTTP requests.

// routes
app.use("/api/products", productRoute);

//sets up a route for the root URL (/). When accessed, it responds with "Hello from Node API Server".
app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});


// connects to your MongoDB database using a connection string. This string includes credentials and database details.
mongoose
  .connect(
    "mongodb+srv://tamourzahid:BPIykz9zPiTxty8e@cluster0.bj7bu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )

  // starting server
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log(
        "Server is running on port 3000"
      );
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
