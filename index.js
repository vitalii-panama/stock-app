

const express = require('express');
const bodyParser = require('body-parser');
const Shopify = require('shopify-api-node');

const app = express();

// Use body-parser middleware to parse incoming JSON data
app.use(bodyParser.json());


const shopify = new Shopify({
	shopName: "407d25",
	apiKey: "a04d5064bad90a84cbb2472a3bfd4d38",
	password: "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"
});

app.post('/stock-update', async (req, res) => {
  const updates = req.body;

  try {
    for (let update of updates) {
      const { id, quantity } = update;
      await shopify.inventoryLevel.adjust(
        {location_id: 88322539864, inventory_item_id: id, available_adjustment: quantity}
      );
    }

    res.status(200).send('Stock updated successfully');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});