import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updatedProduct,
} from "../controller/product.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.patch("/:id", updatedProduct);
router.delete("/:id", deleteProduct);

export default router;
