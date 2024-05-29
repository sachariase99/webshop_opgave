const db = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await db.Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await db.Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await db.Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const [updated] = await db.Product.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).send('Product not found');
    }
    res.send('Product updated');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await db.Product.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).send('Product not found');
    }
    res.send('Product deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
