import express, { Express, Request, Response } from "express";
import { connectDB } from "./utils/mongo.connection";
import apolloServer from './apollo.server'
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();


// CREATE SERVER
const app: any = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.json())
app.use('*', cors());

const start = async ( ) => {
  
  // START APOLLO SERVER
  await apolloServer.start()
  apolloServer.applyMiddleware({ app,  path: '/graphql' })

  // START EXPRESS SERVER
  app.listen(port, async (): Promise<void> => {
    await connectDB()
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

start();