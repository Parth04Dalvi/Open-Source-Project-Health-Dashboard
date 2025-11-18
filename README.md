📊 Open-Source Project Health Dashboard

<img width="940" height="739" alt="image" src="https://github.com/user-attachments/assets/36839e1b-e360-4a4b-90eb-44f4cfc58ada" />

Project Summary
This application is designed to provide real-time, visual health metrics for any public GitHub repository. By leveraging the GitHub REST/GraphQL API, users can input a repository name (e.g., facebook/react) and instantly see key performance indicators (KPIs) like commit frequency, open vs. closed issue trends, pull request velocity, and active contributor counts.

This project demonstrates strong skills in:

API Integration: Securely fetching and handling large datasets from a third-party service (GitHub).

Data Visualization: Transforming raw data into meaningful charts and graphs.

State Management & Persistence (via Firestore): Allowing users to save and track their favorite projects across sessions.

Responsive UI/UX: A clean, modern, and mobile-friendly interface built with Tailwind CSS.

Features
Repository Search: Dynamically search for and load metrics for any public GitHub repository.

Key Metric Visualization: Charts for:

Weekly Commit Volume

Issue Trend (Open vs. Closed)

Pull Request Merge Velocity

Top Contributor Leaderboard

Project Persistence: Ability to save a list of "Watched Repositories" using Firebase Firestore.

User Authentication: Basic authentication (via custom token/anonymous sign-in) to manage personalized lists.

Technology Stack
Frontend: HTML, JavaScript (ES6+), Tailwind CSS

Data Fetching: GitHub API (REST or GraphQL for advanced use)

Database: Firebase Firestore (for user-specific "Watched Repos")

Visualization: A simple charting library (e.g., Chart.js or D3.js, to be added)

Getting Started
Clone the repository:

git clone [https://github.com/yourusername/project-health-dashboard.git](https://github.com/yourusername/project-health-dashboard.git)
cd project-health-dashboard

Open index.html: Simply open the file in your browser to see the initial UI.

Implement API/Firestore: The JavaScript placeholder functions in index.html need to be connected to the GitHub API and Firebase services as detailed in ARCHITECTURE.md.

Future Enhancements
Implementing a GraphQL endpoint for more efficient data fetching.

Adding user authentication and profile management.

Incorporating filtering and date-range selection for metrics.
