if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import * as express from 'express';
import { getPricesUber } from './assets/ubeAPI';
import router from './routes/routes';

const app = express();
app.use(express.json());
app.use(router);

const getPrices = async () => {
  const request = await getPricesUber();
  request.json().then(json => {
    const fares = json.data.fareEstimate.fares;

    for (const key in fares) {
      if (Object.prototype.hasOwnProperty.call(fares, key)) {
        const element = fares[key];
        if(key == "20022265") {
          console.log("Comfort: ", element.fare)
        } else if(key == "20027725") {
          console.log("UberX: ", element.fare)
        } else if(key == "20034913") {
          console.log("Moto: ", element.fare)
        }
      }
    }
  })
}

getPrices();

export default app;