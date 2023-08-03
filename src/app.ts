import express, { NextFunction, Request, Response } from "express";
import { router as productRoutes } from "./routes/product.routes";
import getDbConnection from "./config/db";
import Product from "./models/product.model";
const db = getDbConnection();

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const deleteAllEntries = async () => {
  await Product.deleteMany({});
};
deleteAllEntries();

app.use("/products", productRoutes);

app.use("/", (req: Request, res: Response, NextFunction) => {
  console.log(req.body);
  res.json({ message: "Hello! Catch-all route" });
});

export default app;
