function cartController() {
  return {
    index(req, res) {

      res.render('customers/cart');
    },

    update(req, res) {
      if (!req.session.cart) {
        req.session.cart = {
          items: {},
          totalQty: 0,
          totalPrice: 0,
        };
      }

      const cart = req.session.cart;
      const itemId = req.body._id;
      const itemPrice = req.body.price;

      if (!cart.items[itemId]) {
        cart.items[itemId] = {
          items: req.body,
          qty: 1,
        };
        cart.totalQty += 1;
        cart.totalPrice += itemPrice;
      } else {
        cart.items[itemId].qty += 1;
        cart.totalQty += 1;
        cart.totalPrice += itemPrice;
      }

      return res.json({ totalQty: cart.totalQty });
    },
  };
}

module.exports = cartController;
