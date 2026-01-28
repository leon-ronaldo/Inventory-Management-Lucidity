require("dotenv").config();
const connectDB = require("./config/dbconfig");
const Product = require("./models/ProductModel");

let seedProducts = [
    {
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        quantity: 12,
        enabled: true,
    },
    {
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 2999,
        quantity: 5,
        enabled: true,
    },
    {
        name: "Office Chair",
        category: "Furniture",
        price: 8500,
        quantity: 2,
        enabled: true,
    },
    {
        name: "Notebook",
        category: "Stationery",
        price: 60,
        quantity: 0,
        enabled: true,
    },
    {
        name: "Water Bottle",
        category: "Accessories",
        price: 350,
        quantity: 20,
        enabled: true,
    }
];

seedProducts = seedProducts.map(p => ({
    ...p,
    value: p.price * p.quantity
}));


const seedDB = async () => {
    try {
        await connectDB();

        await Product.deleteMany();
        console.log("Old data removed");

        await Product.insertMany(seedProducts);
        console.log("Database seeded successfully");

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();
