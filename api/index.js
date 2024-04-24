import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/db.js";
import router from "./routes/user.routes.js";
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.send("hii");
});
connectDB();
app.use(express.json());

app.use("/api", router);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
