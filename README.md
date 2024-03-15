
```markdown
# Stock Update API

This API allows you to update the stock quantity of product variants in a Shopify store.

## Installation

1. Install the necessary packages with npm:

```bash
npm install express body-parser shopify-api-node
```

2. Replace `'your-shop-name'`, `'your-api-key'`, and `'your-password'` in the server code with your actual Shopify shop name, API key, and password.

## Usage

To use the `/stock-update` endpoint, send a POST request with a JSON array of objects in the request body. Each object should have `id` and `quantity` fields. The `id` field is the id of the product variant you want to update, and the `quantity` field is the new stock quantity.

### Example JSON Data

```json
[
  {
    "id": 123,
    "quantity": 10
  },
  {
    "id": 456,
    "quantity": 20
  }
]
```

### cURL

If your JSON data is in a file:

```bash
curl -X POST -H "Content-Type: application/json" -d @your-file.json https://stock-update-app.fly.dev/stock-update
```

Replace `your-file.json` with the path to your JSON file.

If your JSON data is in your clipboard:

```bash
curl -X POST -H "Content-Type: application/json" -d 'your-json-data' https://stock-update-app.fly.dev/stock-update
```

Replace `your-json-data` with your JSON data.

### Postman

Set the request method to POST, the request URL to `https://stock-update-app.fly.dev/stock-update`, the body type to raw JSON, and paste your JSON data into the body.

## Response

If the request is successful, you will receive a response with the status code 200 and the message "Stock updated successfully". If there is an error, you will receive a response with the status code 500 and an error message.
```

This README provides information about the installation and usage of the API, including how to send requests to the `/stock-update` endpoint with `curl` and Postman, and what response to expect.