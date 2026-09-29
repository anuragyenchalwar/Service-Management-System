const express = require('express');

import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://user:pass%40123@service-management.hbbotyp.mongodb.net/?appName=service-management");

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await client.close();
}







const app = express();

module.exports = app;