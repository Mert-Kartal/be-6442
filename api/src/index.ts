import express from "express";
import cors from "cors";
import CategoryRouter from "./modules/category/router";
import PostRouter from "./modules/post/router";
import CommentRouter from "./modules/comment/router";
import swaggerConfig from "./config/swagger";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1/category", CategoryRouter);
app.use("/api/v1/post", PostRouter);
app.use("/api/v1/comment", CommentRouter);
app.use("/", swaggerConfig);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
