const express = require('express');
const app = express();
const db = require('./models');
const productRoutes = require('./routes/products');
const cors = require('cors');

app.use(cors());

require('dotenv').config();

app.use(express.json());
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
