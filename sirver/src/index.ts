import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/myUserRoute";
mongoose.connect(process.env.MONGODB_URL as string).then(() => {
  console.log("connected to database");
});
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);
app.listen(3000, () => {
  console.log(" Server is running on port 3000");
});
