const app = require("./routes/index");
const { dbConnect } = require("./models/dbconnection/dbconnection");

dbConnect();

if (process.env.ENV === "production" || process.env.ENV === "staging") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`your project is running`);
});
