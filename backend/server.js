require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbconfig");
const Product = require("./models/ProductModel");

const app = express();

connectDB();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());


// GET ALL PRODUCTS
app.get("/api/products", async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
});


// CREATE PRODUCT
app.post("/api/products", async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
});


// UPDATE PRODUCT
app.put("/api/products/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(product);
});


// DELETE PRODUCT
app.delete("/api/products/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});


app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
});
