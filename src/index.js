import express from "express";
import cors from "cors";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
const app = express();

app.use(cors());
app.use(express.json());

const api_key = "pm5v8cbxrgew";
const api_secret =
  "7pjhv43etgnzfqnextvhg63evd4u4bbn8dgxbwrepc77umy9g4gcbvvg9c58w6uk";

const serverClient = new StreamChat.getInstance(api_key, api_secret);

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    const userId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createToken(userId);
    res.json({ token, userId, firstName, lastName, username, hashedPassword });
  } catch (error) {
    res.json(error);
  }
});

app.post("/login");

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
