# 🌍 Wanderlust — Full-Stack Vacation Rental Platform

Wanderlust is a production-ready, full-stack vacation rental marketplace built with Node.js, Express, MongoDB, and EJS. The platform allows users to explore accommodations worldwide, list properties with cloud media uploads, manage reviews with interactive ratings, and calculate dynamic pricing with taxes.

---

## 🚀 Key Features

* **Complete CRUD Workflows:** Full lifecycle management (Create, Read, Update, Delete) for travel listings and user reviews.
* **Authentication & Authorization:** Secure session-based authentication via Passport.js, featuring route protection and role-based authorization (owners can edit/delete listings; review authors can delete reviews).
* **Cloud Media Management:** Seamless image upload, transformation, and storage via Cloudinary and Multer.
* **Dynamic Pricing Engine:** Real-time client-side GST tax toggle calculation.
* **Schema Validation & Error Handling:** Two-tier validation utilizing Joi schemas on the server and Bootstrap constraints on the client, backed by centralized async error-handling middleware.
* **Interactive Star Rating System:** Dynamic 5-star rating interface powered by Starability CSS.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js (v5), REST APIs
* **Database & ODM:** MongoDB, Mongoose ODM
* **Authentication:** Passport.js, Passport-Local-Mongoose, Express-Session, Connect-Flash
* **Templating & UI:** EJS, EJS-Mate, Bootstrap 5, FontAwesome, Starability CSS
* **Media & Cloud:** Cloudinary v2, Multer, Multer-Storage-Cloudinary
* **Validation:** Joi

---

## 📂 Project Architecture

```text
├── controllers/          # Route controller logic (listings, reviews, users)
├── init/                 # Database seed data and initialization scripts
├── models/               # Mongoose data schemas (User, Listing, Review)
├── public/               # Static assets (CSS, client-side JS)
├── routes/               # Modular Express RESTful routers
├── utils/                # Custom error classes and async wrappers
├── views/                # EJS templates, layouts, and reusable partials
├── app.js                # Application entry point & middleware pipeline
├── cloudConfig.js        # Cloudinary integration setup
└── schema.js             # Joi validation schemas
