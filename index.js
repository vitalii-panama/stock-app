const express = require('express');
const bodyParser = require('body-parser');
const Shopify = require('shopify-api-node');

const app = express();
app.use(bodyParser.json());

const shopify = new Shopify({
  shopName: 'your-shop-name',
  apiKey: 'your-api-key',
  password: 'your-password'
});

app.post('/stock-update', (req, res) => {
  const { id, quantity } = req.body;

  shopify.productVariant.update(id, { inventory_quantity: quantity })
    .then(() => res.status(200).send('Stock updated successfully'))
    .catch(err => res.status(500).send(err));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});