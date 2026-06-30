# Laxmi Sanjay Badanikai - Portfolio Website

<div align="center">
  
**A modern, responsive personal portfolio website showcasing projects, skills, and professional background**

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-000000?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.3.0-47A248?logo=mongodb)](https://mongodb.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

## 📖 Overview

This is my personal portfolio website built to showcase my journey as a Computer Science & Engineering student at University Visvesvaraya College of Engineering (UVCE), Bengaluru. The website features a clean, modern design with dark/light theme support, project showcase, skills section, and a functional contact form.

### 🌟 Key Features

- **Responsive Design**: Optimized for all screen sizes (desktop, tablet, mobile)
- **Dark/Light Theme**: User-preference theming with localStorage persistence
- **Dynamic Projects**: Projects loaded from MongoDB database via REST API
- **Contact Form**: Functional form submission with API integration
- **Smooth Animations**: Enhanced user experience with smooth scrolling
- **Font Awesome Icons**: Clean, professional iconography throughout

---

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) *(Replace with your actual URL)*

---

## 📂 Project Structure

```

portfolio-website/
├── Backend/
│   ├── models/
│   │   └── Project.js          # MongoDB project schema
│   ├── package.json             # Backend dependencies
│   ├── project.js               # In-memory project data (fallback)
│   ├── server.js                # Express server & API routes
│   └── test.js                  # MongoDB connection test
├── Frontend/
│   ├── index.html               # Main HTML structure
│   ├── script.js                # Client-side JavaScript
│   └── style.css                # Complete styling & theming
├── .gitignore                   # Git ignore file
└── README.md                    # Project documentation

```

---

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with CSS variables for theming
- **JavaScript (ES6+)**: Dynamic content loading, form handling, theme toggle
- **Font Awesome 6**: Icon library for visual elements
- **Google Fonts (Inter)**: Modern typography

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for project storage
- **Mongoose**: ODM for MongoDB object modeling
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

---

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/LaxmisanjayBadanikai/portfolio.git
cd portfolio
```

1. **Install backend dependencies**

```
cd Backend
npm install
```

1. **Configure environment variables**

```
# Create a .env file in the Backend directory
cp .env.example .env

# Add your MongoDB connection string
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio
PORT=5000
```

1. **Start the development server**

```
npm run dev
```

1. **Open your browser** at `http://localhost:5000`

## 📊 API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/projects` | GET | Retrieve all projects from database |
| `/api/contact` | POST | Submit contact form message |
| `/*` | GET | Serve frontend static files |

## 🗄️ Database Schema

### Project Model

```
{
  title: String,           // Project title
  description: String,      // Project description
  technologies: [String],   // Array of technologies used
  link: String,            // GitHub or live demo URL
  icon: String             // Font Awesome icon class
}
```

## 🎨 Customization Guide

### Changing Theme Colors

Edit the CSS variables in `Frontend/style.css`:

```
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #0f172a;
  --accent: #3b82f6;        /* Change this to your preferred color */
}
```

### Adding New Projects

**Option 1: Via MongoDB**

```
// Connect to MongoDB and insert a project
db.projects.insertOne({
  title: "Your Project",
  description: "Project description",
  technologies: ["HTML", "CSS", "JavaScript"],
  link: "https://github.com/yourusername/project",
  icon: "fas fa-code"
});
```

**Option 2: Via Backend/project.js**

```
// Add to the getAll() method
new Project(
  6,
  "Your Project",
  "Project description",
  ["HTML", "CSS", "JavaScript"],
  "https://github.com/yourusername/project",
  "fas fa-code"
)
```

### Updating Personal Information

Edit the HTML content in `Frontend/index.html`:

- **Name & Title**: Update hero section text
- **About Me**: Modify the about section content
- **Skills**: Update the skills grid
- **Contact Information**: Update email, location, and availability

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop**: Full layout with grid-based sections
- **Tablet**: Adjusted grid columns and spacing
- **Mobile**: Single-column layout with optimized touch targets

## 🔧 Development Commands

```
# Install dependencies
npm install

# Start development server (with auto-reload)
npm run dev

# Start production server
npm start

# Test MongoDB connection
node test.js
```

## 🚢 Deployment

### Deploy to Render (Recommended)

1. Push your code to GitHub
1. Create a new Web Service on Render
1. Connect your GitHub repository
1. Set environment variables:

- `MONGO_URI`: Your MongoDB connection string
- `PORT`: 5000 (or leave default)
1. Build command: `npm install`
1. Start command: `npm start`

### Deploy to Heroku

```
# Login to Heroku
heroku login

# Create new app
heroku create your-portfolio-name

# Set environment variables
heroku config:set MONGO_URI=your_mongodb_uri

# Deploy
git push heroku main
```

### Deploy to Vercel (Frontend Only)

```
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
1. **Create a feature branch** (`git checkout -b feature/improvement`)
1. **Commit your changes** (`git commit -m 'Add improvement'`)
1. **Push to the branch** (`git push origin feature/improvement`)
1. **Open a Pull Request**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](https://LICENSE) file for details.

## 🙏 Acknowledgements

- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Inter font
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database
- [Express.js](https://expressjs.com/) - Backend framework

## 📬 Contact

- **Email**: badanikailaxmi@gmail.com
- **GitHub**: [LaxmisanjayBadanikai](https://github.com/LaxmisanjayBadanikai)
- **Location**: Bengaluru, Karnataka
<div align="center">
**Built with ❤️ by Laxmi Sanjay Badanikai**
</div>
