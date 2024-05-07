require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());
//app.get("/api", (req, res) => {
//res.json({
// sucess: 1,
//message: "This is rest apis working",
// });
//});
app.use("/api/users", userRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and Running", process.env.APP_PORT);
});
