import { Request, Response, Router } from "express";
import { sign } from "jsonwebtoken";

import { Auth } from "../middlewares/authentication";
import { EstimatePricesController } from "./../modules/uberEstimate/EstimatePricesController";

const auth = new Auth();

const router = Router();

const estimatePricesController = new EstimatePricesController();

//API ROUTES
router.get(
  "/api/get-prices/:dropoff/:pickup",
  auth.authMiddleware,
  estimatePricesController.getPricesUber
);

router.get("/", async (request: Request, response: Response) => {
  return response.json({ success: "it works!" }).status(200);
});

export default router;
