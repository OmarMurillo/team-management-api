import express, { Express, Request, Response } from "express";
import { connectDB } from "./utils/mongo.connection";
import dotenv from "dotenv";
import cors from "cors";
import { routes } from "./routes/routes";
import dataSource from './domain/db/data-source.connection'
dotenv.config();


// CREATE SERVER
const app: any = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.json())
app.use('*', cors());
app.use(routes)

async function assertDatabaseConnection() {
  try {
    await dataSource.authenticate();
    await dataSource.sync();
    console.log("CONNECTED TO MYSQL")
  } catch (error) {

  }
}
const start = async ( ) => {
  
  // START EXPRESS SERVER
  await assertDatabaseConnection()
  app.listen(port, async (): Promise<void> => {
    await connectDB()
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

start();