# GenVerse AI 🚀

An AI-powered content creation and productivity platform that helps users generate articles, blog titles, images, review resumes, remove image backgrounds, and collaborate through a community-driven interface.

## 🌟 Features

### ✍️ AI Content Generation

* Generate high-quality articles using AI
* Create engaging blog titles instantly
* Adjustable content length and creativity

### 🎨 AI Image Tools

* AI Image Generation from text prompts
* Background Removal
* Object Removal from images

### 📄 Resume Analysis

* Upload PDF resumes
* AI-powered resume review and feedback
* Suggestions for improvement

### 👥 Community Platform

* Publish AI-generated creations
* Explore community creations
* Like and interact with published content

### 🔐 Authentication & Authorization

* Secure authentication with Clerk
* User profile management
* Free & Premium subscription plans

### ☁️ Cloud Storage

* Cloudinary integration for image management
* Optimized media storage and delivery

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Clerk Authentication

### Backend

* Node.js
* Express.js
* PostgreSQL (Neon DB)
* Clerk Express SDK
* Cloudinary
* Multer

### AI Services

* Google Gemini API
* AI-powered content generation
* Resume analysis
* Image processing

---

## 📸 Screenshots

### Home Page

*Add screenshot here*

### AI Dashboard

*Add screenshot here*

### Article Generator

*Add screenshot here*

### Image Generator

*Add screenshot here*

### Resume Review

*Add screenshot here*

---

## 🏗️ Project Architecture

Frontend (React + Vite)

↓

Backend API (Express.js)

↓

Authentication (Clerk)

↓

AI Services (Gemini API)

↓

Database (PostgreSQL - Neon)

↓

Media Storage (Cloudinary)

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/genverse-ai.git
cd genverse-ai
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Configure Environment Variables

Create `.env` files for both frontend and backend.

#### Backend

```env
DATABASE_URL=
CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=
GEMINI_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

#### Frontend

```env
VITE_BASE_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=
```

### Run Frontend

```bash
npm run dev
```

### Run Backend

```bash
npm run server
```

---

## 📊 Database Design

### Users

Managed by Clerk Authentication

### Creations

| Field      | Type      |
| ---------- | --------- |
| id         | SERIAL    |
| user_id    | TEXT      |
| prompt     | TEXT      |
| content    | TEXT      |
| type       | TEXT      |
| publish    | BOOLEAN   |
| likes      | TEXT[]    |
| created_at | TIMESTAMP |

---

## 🎯 Key Learning Outcomes

* Full Stack Development
* REST API Design
* Authentication & Authorization
* AI API Integration
* PostgreSQL Database Management
* Cloud Storage Management
* React State Management
* Production-ready Architecture

---

## 🔮 Future Improvements

* AI Chat Assistant
* Team Collaboration
* AI Video Generation
* Advanced Analytics Dashboard
* User Following System
* Comments & Sharing
* Multi-language Support

---

## 👨‍💻 Author

**Anuj Kumar Yadav**

BCA Final Year Student

GitHub: https://github.com/123anujyadav

LinkedIn: Add your LinkedIn profile here

Email: Add your professional email here

---

⭐ If you found this project useful, please consider giving it a star.
