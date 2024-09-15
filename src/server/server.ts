import express from "express";
import cors from "cors";

import routeUser from "../app/routes/user";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", routeUser);

app.listen(4000, () => {
  console.log("SERVER ONLINE - LISTENING PORT 4000");
});
