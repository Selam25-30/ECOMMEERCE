# ECOMMEERCE
# Amazon Clone 🛒

This is a full-fledged Amazon Clone built using **React**, **Fake Store API**, **Firebase**, **Stripe**, and modern web technologies. It includes key e-commerce features such as authentication, payment processing, cart functionality, and product browsing.

## 🚀 Features

### ✅ **Frontend**
- 🖼️ **Modern UI** with css
- 🎠 **Carousel Effect** for featured products
- 🔍 **Category & Header Routing**
- 🛍️ **Cart Page with Add/Remove Items**
- 🏷 **Single Product Details Page**
- 🔗 **Header Navigation with Authentication**
  
### 🔥 **Backend & API**
- 🛒 **Product Data Fetched from [Fake Store API](https://fakestoreapi.com/)**
- 🔑 **Firebase Authentication (Signup, Login, Logout)**
- 💳 **Stripe Payment Integration**
- 📦 **Orders Page with Query & Tracking**
- ⚡ **Firebase Cloud Functions for Backend API**
- 🛠 **UseReducer & UseContext for State Management**
  
## 📦 **Tech Stack**
- **Frontend:** React, CSS
- **Backend:** Firebase, Firestore
- **API:** Fake Store API for product data
- **Payments:** Stripe API
- **State Management:** Context API, useReducer Hook


🛠️ Running the Project Locally
Follow these steps to set up and run the Amazon Clone locally on your machine.

1️⃣ Clone the Repository
First, clone the project repository using Git:


git clone https://github.com/your-username/amazon-clone.git
cd amazon-clone
2️⃣ Install Dependencies
Make sure you have Node.js installed, then run:


npm install
3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add the required API keys. If using Fake Store API, set it up like this:

VITE_API_URL=https://fakestoreapi.com

4️⃣ Run the Development Server
Start the local server using Vite:


npm run dev
This will launch the project, and you can access it at:
👉 http://localhost:5173/

5️⃣ Firebase Setup (Optional)
If using Firebase for authentication or backend functions:

firebase login
firebase init
Then deploy the Firebase functions if needed:


firebase deploy
6️⃣ Build for Production
To create an optimized production build:


npm run build
This generates the production-ready files inside the dist/ folder.

