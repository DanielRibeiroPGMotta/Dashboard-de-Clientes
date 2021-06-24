const bodyParser = require("body-parser");
const app = require("express")();
const cors = require("cors");
const routes = require("./routes/routes");

app.use(cors());

const PORT = 5000;

routes.load(app);

app.listen(PORT, () => {
  console.log(`Api running at port ${PORT}`);
});
