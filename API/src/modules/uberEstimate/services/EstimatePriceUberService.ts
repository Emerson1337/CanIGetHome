import { getPricesUber } from "../../../assets/ubeAPI";

export class EstimatePriceUberService {
  getPrices = async () => {
    const pickUpLat = -3.7560474;
    const pickUpLong = -38.4893449;
    const dropLat = -3.8309824;
    const dropLong = -38.5221671;

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
            prices += `    Comfort: ${element.fare}    `;
          } else if (key == "20027725") {
            prices += `UberX: ${element.fare}    `;
          } else if (key == "20034913") {
            prices += `Moto: ${element.fare}`;
          }
        }
      }
    });

    return prices;
  };
}
