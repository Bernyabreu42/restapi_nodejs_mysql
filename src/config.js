import { config } from "dotenv";

config()

export default {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  username: process.env.USERNAME || "",
  password: process.env.PASSWORD || ""
}
