import { getPricesUber } from "../../../assets/ubeAPI";

export class EstimatePriceUberService {
  getPrices = async (
    pickUpLat: string,
    pickUpLong: string,
    dropLat: string,
    dropLong: string
  ) => {
    const request = await getPricesUber({
      pickUpLat,
      pickUpLong,
      dropLat,
      dropLong,
    });

    let prices: string = "";

    await request.json().then((json) => {
      const fares = json.data.fareEstimate.fares;
      for (const key in fares) {
        if (Object.prototype.hasOwnProperty.call(fares, key)) {
          const element = fares[key];
          if (key == "20022265") {
            prices += `  Comfort: ${element.fare}`;
          } else if (key == "20027725") {
            prices += `  UberX: ${element.fare}`;
          } else if (key == "20034913") {
            prices += `  Moto: ${element.fare}`;
          }
        }
      }
    });

    return prices;
  };
}
