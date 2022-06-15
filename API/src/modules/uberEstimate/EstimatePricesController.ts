import { EstimatePriceUberService } from "./services/EstimatePriceUberService";
import { Request, Response } from "express";

export class EstimatePricesController {
  async getPricesUber(request: Request, response: Response) {
    const { pickup, dropoff } = request.params;

    const dropOffCoordinates = dropoff.split(",");
    const latDropOff = String(dropOffCoordinates[0]);
    const longDropOff = String(dropOffCoordinates[1]);

    const pickUpCoordinates = pickup.split(",");
    const latPickup = String(pickUpCoordinates[0]);
    const longPickup = String(pickUpCoordinates[1]);

    const data = await new EstimatePriceUberService().getPrices(
      latPickup,
      longPickup,
      latDropOff,
      longDropOff
    );
    return response.json(data).status(200);
  }
}
