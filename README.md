# Project Overview
TravelSphere is a comprehensive travel management web application that connects tourists with professional tour guides while offering a seamless booking and payment experience. With features like role-based dashboards, dynamic tour packages, and interactive community engagement, TravelSphere aims to make traveling more accessible and enjoyable for everyone.

# Technologies Used
- Frontend: React, Tailwind CSS, DaisyUI
- Backend & Database: Firebase (Authentication), MongoDB (Data Storage)
- Payment Integration: Stripe
- Routing: React Router DOM
- State Management & Data Fetching: TanStack Query (React Query), Axios
- Animations & UI Enhancements: Framer Motion, Lottie-React, SweetAlert2, React-Toastify
- Date & Selection Tools: React DatePicker, React Select, React Tabs

# Core Features
* Role-Based User System:
  - Supports Tourist, Guide, and Admin roles, each with dedicated dashboards and functionalities.

* Dynamic Tour Packages & Guides:
  - Fresh content on every visit using MongoDB’s $sample operator.

* Secure Authentication:
  - Email/password & Google login, with JWT-based route protection.

* Interactive Community Features:
  - Users can share travel stories and interact via react-share.

* Booking & Payment System:
  - Book tours and guides, and process payments securely using Stripe.

* Admin Management Tools:
  - Admins can approve/reject guides, manage users, and handle guide applications.

* Responsive Design:
  - Optimized for mobile, tablet, and desktop.

* Real-Time Notifications:
  - Instant feedback via SweetAlert2 and React-Toastify.

* Efficient Data Handling:
  - Advanced querying using TanStack Query and MongoDB’s $pull/$push.

* Engaging Visuals & Animations:
  - Smooth transitions with Framer Motion and organized layouts using React Tabs.

# Dependencies
- Core Dependencies:
* @stripe/react-stripe-js & @stripe/stripe-js – Payment processing integration.
* @tanstack/react-query – Efficient data fetching and caching.
* firebase – Authentication and real-time database.
* react-router-dom – Routing and navigation management.
* axios – HTTP client for API requests.
* lottie-react, framer-motion – Animations and motion effects.
* sweetalert2, react-hot-toast – Real-time alerts and notifications.
* react-share – Social sharing functionality.
* swiper – Carousel and slider features.
* react-datepicker, react-select, react-tabs – UI components for date selection, dropdowns, and tab navigation.

# How to Run the Project Locally
Clone the Repository:
* git clone https://github.com/yourusername/assignment-11.git
* cd assignment-11
---
Install Dependencies:
 - Ensure you have Node.js installed. Then, run:
 + npm install
---
Set Up Firebase Configuration:
- Create a .env file in the root directory and add your Firebase config:
- VITE_FIREBASE_API_KEY=your_api_key
- VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
- VITE_FIREBASE_PROJECT_ID=your_project_id
- VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
- VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
- VITE_FIREBASE_APP_ID=your_app_id
---
Run the Development Server:
- npm run dev
---
Build for Production:
- npm run build
---

# Live Link:
  - https://travelsphere-d7b2c.web.app/
  - [React Documentation](https://reactjs.org/docs/getting-started.html)
  - [Stripe Documentation](https://stripe.com/docs)