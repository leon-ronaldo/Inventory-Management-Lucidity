# 📦 Inventory Management - Lucidity

A full-stack inventory management dashboard built with **React, Redux Toolkit, Express, and MongoDB**, designed to simulate a real-world admin panel with scalable architecture and modern UI.

---

## 🚀 Features

- 📊 Real-time inventory dashboard statistics  
- 🛒 Product CRUD operations (Create, Read, Update, Delete)  
- 👁 Enable / Disable products (soft visibility control)  
- 🔄 Centralized state management using Redux Toolkit  
- ⚡ Async API handling with loading & error states  
- 🔔 Toast notifications for user feedback  
- 🎨 Responsive UI with TailwindCSS  
- 🔐 Production-ready CORS configuration  
- ☁ MongoDB integration (Local & Atlas supported)  

---

## 🧠 Tech Stack

### Frontend
- React (Vite)
- TypeScript
- Redux Toolkit
- TailwindCSS
- Lucide Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS Middleware

---

## 🏗 Architecture Overview

Frontend (React + Redux)
        ↓
     Express API
        ↓
      MongoDB

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

git clone https://github.com/your-username/inventory-management-lucidity.git  
cd inventory-management-lucidity  

---

### 2️⃣ Frontend Setup

cd frontend  
npm install  
npm run dev  

Create `.env` file:

VITE_API_URL=http://localhost:5000  

---

### 3️⃣ Backend Setup

cd backend  
npm install  

Create `.env` file:

MONGO_URI=mongodb://127.0.0.1:27017/inventoryDB  
PORT=5000  
FRONTEND_URL=http://localhost:5173  

Run backend server:

node server.js  

---

### 4️⃣ Seed Sample Data (Optional)

node seed.js  

---

## 📊 Dashboard Metrics

- Total Products  
- Total Store Value  
- Out of Stock Products  
- Category Count  

---

## 🎯 Admin Capabilities

- Edit product details  
- Delete products  
- Enable / Disable product visibility  
- Real-time UI updates via Redux  

---

## 🔒 Production Ready Features

- Restricted CORS configuration  
- Scalable MongoDB setup  
- Environment-based configuration  
- Modular Redux architecture  

---

## 📌 Future Improvements

- Authentication & role-based access  
- Pagination & search filters  
- Analytics charts  
- Export inventory reports  
- Cloud deployment automation  

---

## 👨‍💻 Author

Leon Ronaldo  
Frontend & Full-Stack Developer  

---

## ⭐ Support

If you find this project useful, consider giving it a star ⭐ on GitHub!
