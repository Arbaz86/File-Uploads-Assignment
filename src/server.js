const connect = require("./configs/db");
const app = require("./index");
const port = 3000;

app.listen(port, async () => {
  try {
    await connect();
    console.log(`Server started on port ${port}`);
  } catch (error) {
    console.log("error:", error);
  }
});
