import { Request, Response, NextFunction } from "express";
import Product, { IProduct } from "../models/product.model";

let id = 1;

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product: IProduct = req.body;
  const productEntry = new Product({
    name: product.name,
    quantity: product.quantity,
  });
  productEntry.id = id++;
  await productEntry.save();
  return res.status(200).json({ data: { product } });
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    const mappedProds = products.map((p) => {
      return { id: p.id, name: p.name, quantity: p.quantity };
    });
    return res.status(200).json({ data: { products: mappedProds } });
  } catch (e) {
    console.log(e);
  }
};

export const deleteAProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await Product.deleteOne({ id });
    return res.status(200).json({ data: { message: "product deleted" } });
  } catch (e) {
    console.log(e);
  }
};

export const updateQuantity = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newQuant = req.query["number"];
  try {
    const product = await Product.findOne({ id });
    if (!product) {
      return res
        .status(200)
        .json({ data: { message: "no product with that id found" } });
    }

    if (typeof newQuant !== "string" || !newQuant)
      return res.status(500).json({
        data: {
          message: "invalid quantity",
          product: {
            id: product.id,
            name: product.name,
            quantity: product.quantity,
          },
        },
      });
    product.quantity += parseInt(newQuant);
    await product.save();
    return res
      .status(200)
      .json({
        data: {
          product: {
            id: product.id,
            name: product.name,
            quantity: product.quantity,
          },
          message: "updated successfully",
        },
      });
  } catch (e) {
    console.log(e);
  }
};
