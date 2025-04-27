# AI Safety Dashboard

![AI Safety Dashboard](https://img.shields.io/badge/Status-Internship%20Task-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-blue)

A responsive web application to view, filter, sort, and report AI safety incidents, built using React and TypeScript for the HumanChain frontend intern assignment. The dashboard provides a comprehensive overview of AI safety incidents with interactive visualizations, real-time filtering, and detailed reporting capabilities.

## 🔗 Quick Links

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://aisafety-dashboard.netlify.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/PriyanshK09/AI-Safety-Dashboard-Task)

## 📋 Features

- **Modern Dashboard Interface**: Clean, dark-themed UI with responsive design that works on all devices
- **Interactive Incident Management**:
  - Filter incidents by severity (low, medium, high)
  - Sort by date (newest/oldest first)
  - Search functionality across incident titles and descriptions
  - Expandable incident details
- **Real-time Reporting**: Submit new incident reports with a simple form
- **Visualizations**: Severity distribution chart for quick analysis
- **Notification System**: Track new and unread incident reports
- **Responsive Design**: Fully responsive layout with mobile-friendly navigation

## 🖼️ Screenshot

![AI Safety Dashboard Screenshot](/screenshot1.png)

![AI Safety Dashboard Screenshot](/screenshot2.png)

## 🚀 Live Demo

Click [here](https://aisafety-dashboard.netlify.app/) to view the live demo of the application.

## 🔧 Technologies Used

- **Frontend**:
  - React 19
  - TypeScript
  - CSS (with custom variables)
  - react-chartjs-2 for data visualization
  - Lucide React for icons
  - React Router for navigation

## 📦 Project Structure

```
frontend/
├── public/          # Static files
└── src/
    ├── components/  # Reusable UI components
    │   ├── charts/
    │   ├── dashboard-cards/
    │   ├── incident-list/
    │   ├── report-incident-form/
    │   ├── sidebar/
    │   └── topbar/
    ├── lib/         # Types, utilities, and mock data
    └── pages/       # Application pages
        └── Dashboard/
```

## 🛠️ Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PriyanshK09/AI-Safety-Dashboard-Task.git
   cd AI-Safety-Dashboard-Task
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 💡 Design Decisions

- **Dark Theme**: Chosen for reduced eye strain during extended monitoring sessions
- **Color Coding**: Consistent color scheme (green, amber, red) for severity levels
- **Accessibility**: Semantic HTML with ARIA attributes for better accessibility
- **Component Architecture**: Modular design with reusable components for maintainability
- **Responsive First**: Mobile-friendly design that scales up to desktop

## 🔄 Data Flow

The application currently uses mock data stored in the frontend but is structured to easily integrate with a backend API. The incident data includes:

- Incident ID
- Title
- Description
- Severity level (low, medium, high)
- Report timestamp

## 🚧 Future Enhancements

If this were a production application, future improvements could include:

1. Backend API integration for persistent data storage
2. User authentication and role-based access control
3. Additional visualizations (timeline charts, trend analysis)
4. Export functionality for reports
5. Incident comment and collaboration features
6. Dark/light theme toggle

## 📝 Internship Task Notes

This project was created as part of the SparkleHood frontend internship application process. The goal was to demonstrate proficiency in:

- React and TypeScript
- Responsive UI design
- Component architecture
- State management
- Data visualization
- Form handling and validation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed by [Priyansh Khare](https://github.com/PriyanshK09)
