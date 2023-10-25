const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));

const stripe = require("stripe")(
  "sk_test_51O4OJGLekufMvvroCHV5fgs9nIV8dkk7dy7Z5NEXg5iqCKIAZvjIq6y8rQ0dOFf5GJ0EPwdTOSUyDogLxGJn2VF1000gUSWjOo"
);

app.post("/checkout", async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            images: [item.product],
          },
          unit_amount: item.price * 100,
        },
        quantity: 1,
      })),
      mode: "payment",
      success_url: "htpp://localhost:4242/success.html",
      cancel_url: "htpp://localhost:4242/cancel.html",
    });

    res.status(200).json(session);
  } catch (error) {
    next: error;
  }
});

app.listen(4242, () => console.log("App is running on 4242"));
