const express = require("express");
const cors = require('cors');
const port = 3001;
const routes = require("./routes");

main().catch((err) => console.log(err));

async function main() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.get('/healthcheck', async (req, res) => {
    res.status(200).end();
  })  

  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
  });
}







