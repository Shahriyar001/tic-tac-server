import express from "express";
import cors from "cors";
import { StreamChat } from "stream-chat";
const app = express();

app.use(cors());
app.use(express.json());

const api_key = "pm5v8cbxrgew";
const api_secret =
  "7pjhv43etgnzfqnextvhg63evd4u4bbn8dgxbwrepc77umy9g4gcbvvg9c58w6uk";

const serverClient = new StreamChat.getInstance(api_key, api_secret);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
