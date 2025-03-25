const express = require("express")
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud_api")
    .then(() => console.log("DB Connected"))
    .catch(err => console.error(err));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);


app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))