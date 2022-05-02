import { Request, Response } from 'express';

class EstimatePricesController {
    async getPricesUber(request: Request, response: Response) {
        const { token } = request.body;

        return response.json("Success").status(200);
    }
}