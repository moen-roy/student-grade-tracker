#Student Grade Tracker

An Application for students to log in, view/update their academic performance, and for admins to monitor all student records. Built with **HTML**, **CSS**, and **JavaScript**, using a MockAPI backend.

---

## Features

#Student Dashboard

- Secure login for students
- Update subject and score
- Auto-calculates and displays:
    - Pass/Fail status
    - Letter grade (A–E)
- Personalized welcome message & profile image
- Persistent session via `localStorage`
- Logout button

#Admin Dashboard

- Secure admin login
- View all students’ usernames, scores, and subjects
- Pass/Fail badge for each student
- Avatar display for each student
- Logout functionality

---

## Grading System

| Score Range | Grade |
|-------------|-------|
| 0 - 25      | E     |
| 26 - 35     | D     |
| 36 - 49     | C     |
| 50 - 59     | C+    |
| 60 - 74     | B     |
| 75 - 100    | A     |

---

## 📁 Folder Structure

```
project-folder/
│
├── index.html              # Login page
├── dashboard.html          # Student/Admin dashboard (shared)
├── css/
│   └── style.css           # Styles for entire app
├── js/
│   ├── index.js            # Login logic
│   └── dashboard.js        # Dashboard logic (admin & student)
└── README.md               # Project documentation
```

---

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** MockAPI  
    API URL: `https://6859be539f6ef96111541b27.mockapi.io/Student`

---

## Login Demo

- Credentials checked against MockAPI data
- Matching username + password → login success
- Login flow handled entirely in-browser

---

## How It Works

**Login**
- Form captures username & password
- Validates with MockAPI users

**Session**
- On success, user object saved to `localStorage`
- Redirects to dashboard

**Dashboard Rendering**
- If `role = student`: show editable score & subject fields
- If `role = admin`: show list of all student cards

**Logout**
- Clears `localStorage` and redirects to login

---

## Requirements Met

- ✅ SPA (Single Page Application)
- ✅ Uses external API (MockAPI)
- ✅ At least 5 objects in dataset
- ✅ At least 3 attributes per object
- ✅ 3+ event listeners (submit, click, change)
- ✅ Uses array methods (e.g., `forEach`)
- ✅ DRY principles
- ✅ Clear separation of roles/logic
- ✅ No page reloads (SPA behavior)

---

## How to Run

1. **Clone this repo:**
     ```bash
     git clone https://github.com/your-username/student-grade-tracker.git
     cd student-grade-tracker
     ```
2. **Open `index.html` in your browser.**
3. **Use valid credentials from MockAPI to test:**
     - Student access
     - Admin access

---

## Future Improvements

- Average grade across all subjects per student
- Student registration & password reset
- Pagination for large datasets
- Search & filter students (by grade, subject, etc.)

---

## Author

Created by **Roy** —
Demonstrates front-end API integration, user authentication, and role-based UI rendering.
