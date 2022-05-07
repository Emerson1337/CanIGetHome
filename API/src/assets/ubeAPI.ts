import fetch from 'node-fetch';
import { Coordinates } from './uberDTO';

const getPricesUber = async ({pickUpLat = -3.7560474, pickUpLong = -38.4893449, dropLat = -3.8309824, dropLong = -38.5221671}: Coordinates) => {
    const request = await fetch("https://m.uber.com/graphql", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-csrf-token": "x",
            "cookie": process.env.COOKIE_UBER,
            "Referer": `https://m.uber.com/looking?drop%5B0%5D=%7B%22latitude%22%3A${dropLat}%2C%22longitude%22%3A${dropLong}%22%3A0%7D&pickup=%7B%22latitude%22%3A${pickUpLat}%2C%22longitude%22%3A${pickUpLong}%2C%22&vehicle=11803`,
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"operationName\":\"FareEstimate\",\"variables\":{\"destination\":{\"latitude\":-3.8309824,\"longitude\":-38.5221671},\"pickupLocation\":{\"latitude\":-3.7560474,\"longitude\":-38.4893449},\"vehicleViewIds\":[11803,20022265,20034913],\"synced\":true},\"query\":\"query FareEstimate($pickupLocation: InputLocation!, $destination: InputLocation, $pickupTimeMS: Float, $targetProductType: EnumTargetProductType, $vehicleViewIds: [Int!]!) {\\n  fareEstimate(pickupLocation: $pickupLocation, destination: $destination, pickupTimeMS: $pickupTimeMS, targetProductType: $targetProductType, vehicleViewIds: $vehicleViewIds) {\\n    ...FareEstimateFragment\\n    __typename\\n  }\\n}\\n\\nfragment FareEstimateFragment on FareEstimateReturn {\\n  fares\\n  vehicleViewsOrder\\n  __typename\\n}\\n\"}",
        "method": "POST"
    });

    return request;
}

export { getPricesUber }