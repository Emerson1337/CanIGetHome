import fetch from 'node-fetch';

const getPricesUber = async () => {
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
            "x-uber-minfo": "JIGGKONOSTUSDHTPLINMHKHM",
            "x-uber-wa-info": "NMGGIMNOGHJHLPPLQNPONQHM",
            "cookie": process.env.COOKIE_UBER,
            "Referer": "https://m.uber.com/looking?drop%5B0%5D=%7B%22latitude%22%3A-3.8309824%2C%22longitude%22%3A-38.5221671%2C%22addressLine1%22%3A%22R.%20Jardel%20Lima%20dos%20Santos%2C%20230%22%2C%22addressLine2%22%3A%22Fortaleza%20-%20CE%22%2C%22id%22%3A%22ChIJk6063NVPxwcR4AQ2Vyd-hSI%22%2C%22provider%22%3A%22google_places%22%2C%22index%22%3A0%7D&pickup=%7B%22latitude%22%3A-3.7560474%2C%22longitude%22%3A-38.4893449%2C%22addressLine1%22%3A%22Iguatemi%20Bosque%22%2C%22addressLine2%22%3A%22Av.%20Washington%20Soares%2C%2085%2C%20Fortaleza%20-%20CE%22%2C%22id%22%3A%22ChIJ_2UYIGNJxwcRH4FygqPNdy0%22%2C%22provider%22%3A%22google_places%22%7D&vehicle=11803",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"operationName\":\"FareEstimate\",\"variables\":{\"destination\":{\"latitude\":-3.8309824,\"longitude\":-38.5221671},\"pickupLocation\":{\"latitude\":-3.7560474,\"longitude\":-38.4893449},\"vehicleViewIds\":[11803,20022265,20034913],\"synced\":true},\"query\":\"query FareEstimate($pickupLocation: InputLocation!, $destination: InputLocation, $pickupTimeMS: Float, $targetProductType: EnumTargetProductType, $vehicleViewIds: [Int!]!) {\\n  fareEstimate(pickupLocation: $pickupLocation, destination: $destination, pickupTimeMS: $pickupTimeMS, targetProductType: $targetProductType, vehicleViewIds: $vehicleViewIds) {\\n    ...FareEstimateFragment\\n    __typename\\n  }\\n}\\n\\nfragment FareEstimateFragment on FareEstimateReturn {\\n  fares\\n  vehicleViewsOrder\\n  __typename\\n}\\n\"}",
        "method": "POST"
    });

    return request;
}

export { getPricesUber }