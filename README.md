# ✨ Stylish Todo App

A sleek, responsive Todo application built with **React** featuring:

- Stylish buttons
- Toast notifications for interactivity

> Designed for productivity with aesthetics in mind 🎯

---

## 🚀 Features

- ✅ Add, delete, edit and mark todos as completed
- 🎨 Beautiful, Formal way
- 🔔 Real-time toast notifications with [react-hot-toast](https://react-hot-toast.com/)

---

## 📸 Screenshots

### 🖥️ Desktop View

This screenshot shows the **desktop view** of the **PERN Todo List** application:

- 🔹 At the top, there's an input field with an **"Add"** button to enter new todos.
- 🔹 The todo list is displayed in a clean tabular format with three columns: **Description**, **Edit**, and **Delete**.
- 🔹 Each task includes:
  - A short text description of the task.
  - An **Edit** button (yellow) to modify the task.
  - A **Delete** button (red) to remove the task from the list.
- 🔹 The layout is clean, simple, and designed for usability on larger screens like desktops or laptops.

![Screenshot 2025-04-18 074941](https://github.com/user-attachments/assets/b96484d8-66ac-49e5-b9e9-6ed655e7699c)

### ✏️ Edit Todo

This section demonstrates the **Edit Todo** functionality of the PERN Todo App:

- 🪟 When the user clicks the **Edit** button next to a task, a **modal** (popup window) appears.
- 🧾 The modal displays:
  - A heading titled **"Edit Todo"**
  - An input box pre-filled with the existing task description
  - Two buttons at the bottom:  
    - ✅ **Edit** – Updates the task with the new input
    - ❌ **Close** – Closes the modal without saving changes
- ⚙️ Functionality on the live server:
  - The input value is tied to React state, allowing real-time editing.
  - On clicking **Edit**, an HTTP PUT request is sent to the backend (`/todos/:id`) with the updated task text.
  - The backend updates the database using Express and PostgreSQL.
  - The React frontend re-fetches or updates the task list to reflect the change instantly without a full reload.

![Screenshot 2025-04-18 075017](https://github.com/user-attachments/assets/90a16359-9ec2-43fb-ba6d-a2571c104e4a)


# PostgreSQL Database Management

## 1. Using pgAdmin 4 GUI
The pgAdmin 4 GUI simplifies database management. Here's how to use it:
1. **Connect to the Database**: Launch pgAdmin 4 and connect to the PostgreSQL database by entering your credentials.
2. **Run a Query**: 
   - Open a new query window.
   - Enter the SQL command below to query the `public.todo` table:
     ```sql
     SELECT * FROM public.todo
     ORDER BY todo_id ASC;
     ```
   - Click the **Run** button to execute the query.
3. **View Results**: The output will appear in the **Data Output** tab, displaying rows and columns fetched by the query.
   
![Screenshot 2025-04-18 075354](https://github.com/user-attachments/assets/3d2558b8-702f-43ea-a83a-a712e9fa78aa)

---

## 2. Using Terminal Commands
For those who prefer command-line operations, follow these steps:
1. **Open Terminal**: Start your terminal application.
2. **Connect to PostgreSQL**:
   ```bash
   psql -U username -d database_name -h host
   ```
![Screenshot 2025-04-18 075510](https://github.com/user-attachments/assets/62b3d4a2-4ea3-42bd-8d08-9d40595dd897)

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, React Hot Toast
- **Build Tool**: Create React App
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Version Control**: Git + GitHub

---

## 🧑‍💻 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm start (for  frontend)
or
node  index.js (for backend)
```
---

Enjoy managing your tasks with ease – happy productivity! ✅📝

