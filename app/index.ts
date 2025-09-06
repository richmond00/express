import dotenv from "dotenv";
dotenv.config();
import * as redis from "redis";
import { createApp } from "./app";

const {PORT, REDIS_URL} = process.env;

const startServer = async () => {
  console.log('trying to start server');
  const client = redis.createClient({ url: REDIS_URL });
  await client.connect();

  const app = createApp(client);
  app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
  });

}

startServer();