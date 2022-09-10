const express = require("express");
const process = require("process");
const dotenv = require("dotenv");

dotenv.config();

const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

const PORT = 5000 || process.env.PORT;
const app = express();

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(PORT, () => console.log("server listen port " + PORT));
