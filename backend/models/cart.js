const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
    quantity: {
      type: Number,
      default: 1
    }
  });

const Cart = mongoose.model("Cart", cartSchema);

// const TotalVirtual = cartSchema.virtual("total");

// TotalVirtual.get(async () => {
//   let total = 0;
//   this.items.map(async (item) => {
//     itemObj = await Item.find(item._id);

//     total += item.quantity * itemObj.price;
//   });
//   return total;
// });

module.exports = Cart;
