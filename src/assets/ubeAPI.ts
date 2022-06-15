import fetch from "node-fetch";
import { Coordinates } from "./uberDTO";

const login = async () => {};

const getPricesUber = async ({
  pickUpLat,
  pickUpLong,
  dropLat,
  dropLong,
}: Coordinates) => {
  const request = await fetch("https://m.uber.com/graphql", {
    // @ts-ignore
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "x-csrf-token": "x",
      "x-uber-wa-info": "KJFFQQKPSQNQPRPRQQIGPTNS",
      cookie: process.env.COOKIE_UBER,
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: `{"operationName":"FareEstimate","variables":{"destination":{"latitude":${dropLat},"longitude":${dropLong}},"pickupLocation":{"latitude":${pickUpLat},"longitude":${pickUpLong}},"vehicleViewIds":[11803,20022265,20034913],"synced":true},"query":"query FareEstimate($pickupLocation: InputLocation!, $destination: InputLocation, $pickupTimeMS: Float, $targetProductType: EnumTargetProductType, $vehicleViewIds: [Int!]!) {\\n  fareEstimate(pickupLocation: $pickupLocation, destination: $destination, pickupTimeMS: $pickupTimeMS, targetProductType: $targetProductType, vehicleViewIds: $vehicleViewIds) {\\n    ...FareEstimateFragment\\n    __typename\\n  }\\n}\\n\\nfragment FareEstimateFragment on FareEstimateReturn {\\n  fares\\n  vehicleViewsOrder\\n  __typename\\n}\\n"}`,
    method: "POST",
  });

  return request;
};

export { getPricesUber };
