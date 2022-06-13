import { EstimatePricesController } from "./../modules/uberEstimate/EstimatePricesController";
import { Router } from "express";

const router = Router();

const estimatePricesController = new EstimatePricesController();

//API ROUTES
//AUTH AND OTHER THINS ABOUT USER
router.get("/api/get-prices", estimatePricesController.getPricesUber);

export default router;
