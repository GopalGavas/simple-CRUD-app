import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

// Routes import
import productRouter from "./routes/product.route.js";

// routers declration
app.use("/api/product", productRouter);

// NOTE: DATABASE CONNECTION
mongoose
  .connect(
    "mongodb+srv://<your-username>:<your-password>@simplecrud.juneaet.mongodb.net/Crud-API?retryWrites=true&w=majority&appName=simpleCRUD"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is listining on the port 3000");
    });
  })
  .catch((err) => {
    console.error("connection failed", err);
  });
