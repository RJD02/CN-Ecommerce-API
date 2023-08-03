import { Router, Request, Response } from "express";
import {
  createProduct,
  getAllProducts,
  deleteAProduct,
  updateQuantity,
} from "../controllers/product.controller";

const router = Router();

// create new product
router.post("/create", createProduct);

//get all products
router.get("/", getAllProducts);

// delete a product
router.delete("/:id", deleteAProduct);

// update quantity of a product
router.post("/:id/update_quantity/", updateQuantity);

export { router };
