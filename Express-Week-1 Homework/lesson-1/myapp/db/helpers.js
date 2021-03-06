import mongoose from "mongoose";

export function connectDb() {
  return mongoose.connect(process.env.DB_URI);
}

export function truncateDb() {
  if (mongoose.connection.readyState !== 0) {
    // top level objects
    const { collections } = mongoose.connection;

    // each object will return promise when we delete
    const promises = Object.keys(collections).map((collection) =>
      mongoose.connection.collection(collection).deleteMany({})
    );

    return Promise.all(promises);
  }
}

export function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect();
  }
}
