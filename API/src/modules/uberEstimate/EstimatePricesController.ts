import { EstimatePriceUberService } from "./services/EstimatePriceUberService";
import { Request, Response } from "express";

export class EstimatePricesController {
  async getPricesUber(request: Request, response: Response) {
    const data = await new EstimatePriceUberService().getPrices();
    return response.json(data).status(200);
  }
}
