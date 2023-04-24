const Customer = require("./models/customer");
const Order = require("./models/order");

let customerId = null;
Customer.insertMany([
  {
    name: "Joey Tribianni",
    email: "jt@gmail.com",
  },
  {
    name: "Chandler Bing",
    email: "cb@gmail.com",
  },
])
  .then((insertedCustomers) => {
    console.log("Inserted Customers are: ", insertedCustomers);
    return Customer.deleteOne({ name: "Joey Tribianni" });
  })
  .then((deletedCustomer) => {
    console.log("Deleted: ", deletedCustomer);
    return Customer.find();
  })
  .then((remainingCustomers) => {
    console.log("Remaining Customer : ", remainingCustomers);
    customerId = remainingCustomers[0]._id;
    return Order.create({
      customer_id: customerId,
      total: 45,
    });
  })
  .then((order) => {
    console.log("Current Customer's Order is : ", order);
    return Order.find({ customer_id: customerId });
  })
  .then((selectedOrder) => {
    console.log("Current Customer's Selected Order is : ", selectedOrder);
  })
  .catch((e) => {
    throw e;
  });
