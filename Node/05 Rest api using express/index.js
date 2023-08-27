const fs = require("fs");
const mongoose = require("mongoose");
const { log } = require("console");
const userRouter = require("./routes/user");
const app = express();
const port = 8080;
mongoose
  .connect("mongodb://127.0.0.1:27017/MyApp")
  .then(() => {
    console.log("MongoDb connection sucsess");
  })
  .catch((err) => console.log("Mongodb error", err));

app.use(express.urlencoded({ extended: false }));
// ! Routes
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server Started at Port:${port}`);
});
