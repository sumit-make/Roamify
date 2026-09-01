<div align="center">

#  Romify

### Discover • Explore • Experience

<p>
A modern full-stack accommodation marketplace built with the MERN ecosystem, enabling users to discover unique stays, create listings, share experiences through reviews, and manage properties through a secure and seamless platform.
</p>

<img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js">
<img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb">
<img src="https://img.shields.io/badge/EJS-Templating-red?style=for-the-badge">
<img src="https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript">
<img src="https://img.shields.io/badge/Passport.js-Authentication-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/Cloudinary-Image_Storage-orange?style=for-the-badge">
<img src="https://img.shields.io/badge/Groq-AI_Powered-purple?style=for-the-badge">

<br><br>

<h3>🚀 Full-Stack Property Rental Platform with AI-Powered Recommendations</h3>

</div>

---

##  About The Project

**Romify** is a feature-rich accommodation marketplace that allows users to discover unique stays, create and manage property listings, upload images, and share experiences through reviews.

The platform also includes an **AI-Powered Smart Stay Recommender** that understands natural-language travel requirements and intelligently matches users with the most relevant properties.

Built using modern web technologies and following the **MVC architecture**, Romify delivers a scalable, secure, and user-friendly accommodation discovery experience.

---

## ✨ Key Features

### 🔐 Authentication & Security

* Secure User Registration & Login
* Passport.js Authentication
* Session Management
* Cookie-Based Authentication
* Protected Routes & Authorization

### 🏠 Listing Management

* Create New Listings
* Edit Existing Listings
* Delete Listings
* Detailed Listing Pages
* Dynamic Image Uploads
* Property Capacity & Amenities
* Property Ratings

### 🤖 AI-Powered Smart Stay Recommender

Romify uses AI to understand what users are looking for and recommend properties based on their natural-language travel requirements.

#### ✨ Features

* 🧠 **Natural Language Understanding**

  * Users can describe their travel plans in plain English.
  * Example:

    > "I'm going to Manali with 3 friends. I need a peaceful place with mountain views, Wi-Fi and parking under ₹5000."

* 🎯 **Intelligent Property Matching**

  * AI extracts important requirements such as:

    * Location
    * Budget
    * Group size
    * Amenities
    * Property preferences

* ⭐ **Match Scoring**

  * Every recommendation receives a percentage-based match score.

* 🏆 **Ranked Recommendations**

  * Properties are automatically sorted from the best match to the least relevant match.

* 💡 **AI Explanations**

  * Each recommendation includes an explanation describing why the property matches the user's requirements.

#### 📊 Matching Algorithm

The recommendation engine evaluates multiple factors:

| Matching Factor | Weight |
| --------------- | -----: |
| 💰 Budget       |    25% |
| 📍 Location     |    25% |
| 👥 Capacity     |    15% |
| 🛎️ Amenities   |    20% |
| ✨ Preferences   |    15% |

#### 🧠 AI Technology

* **Groq API**
* **Mixtral 8x7B**
* Natural Language Processing
* Rule-Based Fallback Parsing
* Weighted Recommendation Algorithm

The system also includes fallback parsing using regex patterns, allowing basic recommendation functionality even when the AI API is unavailable.

### ⭐ Reviews & Feedback

* Add Reviews
* Delete Reviews
* User Interaction System
* Property Feedback
* Rating-Based Property Evaluation

### ☁️ Cloud Integration

* Cloudinary Image Storage
* Optimized Media Delivery
* Secure Image Management
* Scalable Cloud Infrastructure

### 🎨 User Experience

* Responsive EJS Templates
* Flash Messages
* Clean UI Design
* Mobile-Friendly Layout
* Modern AI Recommendation Interface

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><b>Frontend</b></td>
<td>HTML5, CSS3, JavaScript, EJS</td>
</tr>

<tr>
<td align="center"><b>Backend</b></td>
<td>Node.js, Express.js</td>
</tr>

<tr>
<td align="center"><b>Database</b></td>
<td>MongoDB, Mongoose</td>
</tr>

<tr>
<td align="center"><b>Authentication</b></td>
<td>Passport.js, Express Session, Cookies</td>
</tr>

<tr>
<td align="center"><b>AI / NLP</b></td>
<td>Groq API, Mixtral 8x7B, Axios</td>
</tr>

<tr>
<td align="center"><b>Cloud Services</b></td>
<td>Cloudinary</td>
</tr>

<tr>
<td align="center"><b>Architecture</b></td>
<td>MVC Pattern</td>
</tr>
</table>

---

## 🏗️ Project Architecture

```text
                         ┌─────────────────────┐
                         │       Client        │
                         │     EJS + JS        │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       Routes       │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
          ┌─────────────────┐             ┌──────────────────┐
          │   Controllers   │             │ Recommendation   │
          │                 │             │    Controller    │
          └────────┬────────┘             └────────┬─────────┘
                   │                               │
                   │                               ▼
                   │                    ┌──────────────────┐
                   │                    │   Groq AI / NLP  │
                   │                    │     Processing   │
                   │                    └────────┬─────────┘
                   │                             │
                   └──────────────┬──────────────┘
                                  ▼
                         ┌─────────────────────┐
                         │   Models / MongoDB  │
                         └─────────────────────┘
```

---

## 🤖 AI Recommendation Flow

```text
User Natural Language Query
            │
            ▼
      Groq AI / NLP
            │
            ▼
   Extract Requirements
            │
     ┌──────┼─────────┐
     ▼      ▼         ▼
 Location Budget   Amenities
     │      │         │
     └──────┼─────────┘
            ▼
     Search Listings
            │
            ▼
    Calculate Match Score
            │
            ▼
      Rank Properties
            │
            ▼
   Top 5 Recommendations
            │
            ▼
 Property + Score + Explanation
```

---

## 🎯 AI Recommendation Example

### User Query

```text
I'm going to Manali with 3 friends.
We need a peaceful place with mountain views,
Wi-Fi and parking, under ₹5000 per night.
```

### AI Processing

The system extracts:

```text
Location     → Manali
Budget       → ₹5000/night
Group Size   → 3-4 people
Amenities    → Wi-Fi, Parking
Preferences  → Mountain Views, Peaceful
```

### Example Recommendation

```text
🏆 Mountain View Villa

Match Score: 94%

✓ Within your budget
✓ Suitable for your group
✓ Located in Manali
✓ Wi-Fi available
✓ Parking available
✓ Strong match for mountain-view preference

AI Explanation:
"Excellent match for your budget and group size.
The property provides Wi-Fi and parking and strongly
matches your preference for a peaceful mountain-view stay."
```

---

## 🔗 AI Recommendation API

### GET `/recommendations`

Displays the AI recommendation interface.

### POST `/recommendations/search`

Processes a natural-language travel query.

#### Request

```json
{
  "query": "I want a villa in Goa with pool under ₹8000"
}
```

#### Response

```json
{
  "success": true,
  "recommendations": [
    {
      "_id": "...",
      "title": "Beachfront Resort in Goa",
      "location": "Goa",
      "price": 3500,
      "capacity": 2,
      "amenities": [
        "Wi-Fi",
        "Beach Access",
        "Pool"
      ],
      "rating": 4.6,
      "matchScore": 92,
      "explanation": "Perfect match for your budget, features the pool you requested, and has excellent beach access in Goa."
    }
  ]
}
```

---

## 🗂️ AI Recommendation Data Model

For the AI recommender to work effectively, listings support additional information such as:

```javascript
{
  title: "Mountain View Villa",
  description: "Peaceful villa surrounded by mountains",
  price: 4200,
  location: "Manali",
  country: "India",
  capacity: 4,
  amenities: [
    "Wi-Fi",
    "Parking",
    "Kitchen"
  ],
  rating: 4.8
}
```

These attributes are used by the recommendation engine to calculate property relevance.

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/romify.git
```

### Navigate to the Project Directory

```bash
cd romify
```

### Install Dependencies

```bash
npm install
```

This installs all required dependencies including **Axios** for AI API communication.

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

SECRET=your_session_secret

GROQ_API_KEY=your_groq_api_key

NODE_ENV=development
```

### Get a Groq API Key

Create a free Groq API key from:

[Groq API Console](https://console.groq.com/keys?utm_source=chatgpt.com)

> Never commit your `.env` file or API keys to GitHub.

---

## ▶️ Run the Application

```bash
node app.js
```

or

```bash
npm start
```

Then open:

```text
http://localhost:8080
```

For the AI recommendation interface:

```text
http://localhost:8080/recommendations
```

---

## 📂 Project Structure

```bash
Romify/
│
├── controllers/
│   └── ...
│
├── controler/
│   └── recommendation.js
│
├── models/
│   └── listing.js
│
├── routes/
│   └── ...
│
├── middleware/
│   └── ...
│
├── utils/
│   └── recommendationAI.js
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── recommendations/
│   │   └── index.ejs
│   ├── users/
│   └── includes/
│
├── init/
│   └── data.js
│
├── app.js
├── package.json
├── .env.example
└── README.md
```

---

## 🎯 Key Highlights

✅ Full-Stack MERN Ecosystem

✅ AI-Powered Natural Language Recommendations

✅ Intelligent Property Matching

✅ Match Score & AI Explanations

✅ Groq + Mixtral AI Integration

✅ Secure Authentication System

✅ RESTful API Design

✅ Cloud-Based Image Management

✅ Responsive EJS Interface

✅ Scalable MVC Architecture

✅ MongoDB Database Integration

✅ Flash Messaging System

---

## 📸 Screenshots

### 🏠 Homepage

<img width="1917" height="971" alt="Romify Homepage" src="https://github.com/user-attachments/assets/a9deef6c-d559-4aed-8417-13c466c6a1fc" />

### 🏡 Listings

<img width="1912" height="940" alt="Romify Listings" src="https://github.com/user-attachments/assets/48b12ab8-fac9-4c49-b963-aec84557135b" />

### 📁 Recommended Screenshot Structure

```text
screenshots/
│
├── homepage.png
├── listings.png
├── property-details.png
├── login.png
├── reviews.png
└── ai-recommendations.png
```

---

## 📚 Learning Outcomes

Through Romify, the project demonstrates practical experience in:

* Full-Stack Web Development
* RESTful API Development
* Natural Language Processing
* AI API Integration
* Recommendation Systems
* Weighted Matching Algorithms
* Authentication & Authorization
* MongoDB Data Modeling
* Cloudinary Integration
* Session & Cookie Management
* MVC Architecture
* Responsive UI Development
* Scalable Application Design

---

## 🔮 Future Enhancements

* 🔍 Advanced Search & Filters
* 🗺️ Interactive Maps
* ❤️ Wishlist Feature
* 💳 Payment Integration
* 📱 Progressive Web App
* 🔔 Real-Time Notifications
* 🌐 Multi-Language Support
* 🧠 Personalized Recommendations using User History
* 📊 Recommendation Analytics
* 🏡 Similar Property Recommendations
* ⭐ Recommendation Learning from User Feedback
* 🕒 Recommendation History

---

## 👨‍💻 Developer

### Sumit Kumar

**B.Tech Undergraduate | NIT Kurukshetra**

 Full Stack Developer
Open Source Contributor

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

Built with ❤️ using Node.js, Express.js, MongoDB, EJS, Passport.js, Cloudinary & Groq AI

</div>
