# **FNUAnantKumar-ASSIGNMENT-10-INFO-6150**

## **React Job Portal with Redux, Material UI, and Axios**

### **Overview**
Building on the foundation of Assignment 9, this project introduces user types (`employee` and `admin`), role-based routing, and two new APIs for job management. The major highlight of this assignment is the complete migration from `useState` to Redux for state management, ensuring a centralized and scalable solution. While Redux does feel like overkill for a smaller project like this, its introduction here lays the groundwork for building scalable applications. Plus, it was fun(🥹) wrestling Redux into place!

---

### **Login and Logout**
- **Form Fields**:  
  The login form continues to use Material UI components like `Card`, `TextField`, `Button`, and `Typography`. Validation is implemented for email and password fields, ensuring correct formats before submission.
- **Role-based Authentication**:  
  The login API now distinguishes between two user types: `employee` and `admin`. Upon successful login, the user type is stored in Redux, and routing is tailored accordingly. Admin users cannot access employee pages, and employees cannot access admin functionalities.
- **Session Management and Logout**:  
  Similar to Assignment 9, session data is stored in `localStorage`, allowing users to stay logged in. The logout function clears session data and resets Redux states, ensuring a clean slate when the user logs out.
- **Route Protection**:  
  Routes are dynamically protected based on user type. Employees are redirected to their `home` page, while admins are taken to the `employees` page. Unauthorized users attempting to access protected routes are redirected to the login page.


---

### **Job Management**

#### **Create Jobs Page (Admin-only)**
- **Form Design**:  
  Admins can access a the "Create Job" page to add job postings. The form is built using Material UI components like `TextField`, `Button`, and `Box`.
- **Redux Integration**:  
  The form leverages Redux for state management, with slices handling job details like `companyName`, `jobTitle`, `description`, `salary`, and `location`. The `updateJobDetails` and `resetJobDetails` actions dynamically update or reset form fields.
- **API Integration**:  
  Submitting the form triggers the `jobs/create` API using Axios. If the job is successfully created, a success alert (powered by Material UI’s `Alert` component) is displayed, and the form fields reset. Errors are gracefully handled, with meaningful messages shown to the user.
- **Role Restriction**:  
  This page is inaccessible to employee users, ensuring that only admins can create jobs.

#### **Jobs Page (Employee-only)**
- **Dynamic Job List**:  
  Employees can view a list of available jobs on the "Jobs" page. The jobs are fetched dynamically using the `jobs/get` API and displayed in a Material UI `Table`. Each row contains details like the job title, company name, salary, description, and location.
- **Redux State Management**:  
  The job list is stored in Redux, with actions like `setJobs`, `setJobLoading`, and `setJobError` managing the state. Loading spinners and error messages are displayed based on the state, providing clear feedback to the user.
- **Layout and Responsiveness**:  
  The Material UI table is fully responsive, ensuring a clean and accessible layout across devices.
- **Role Restriction**:  
  Admin users are restricted from accessing this page.

---

### **Employees (Admin-only)**
- **Employee Directory**:  
  Admins can view a table listing all registered employees, fetched via the `user/getAll` API. Each row displays the employee’s name, email, and user type.
- **State Management**:  
  Employee data is managed in Redux, with slices handling loading states and error feedback. Material UI’s `CircularProgress` component provides a visual indicator during data fetching.
- **Role Restriction**:  
  Employee type users are restricted from accessing this page.

---

### **Redux Implementation**
One of the major enhancements in this assignment is the migration of all state management to Redux. Here’s how Redux is integrated across the app:
- **Slices and Actions**:  
  Each major feature (e.g., login, job management, employee directory) has its own Redux slice, defined using Redux Toolkit's `createSlice` function. This approach centralizes actions, reducers, and initial states, reducing boilerplate.
- **Global Store**:  
  The `store.js` file combines all slices using `configureStore`. This setup provides a single source of truth for the entire application.
- **Usage**:  
  - The `useSelector` hook accesses state from the Redux store.
  - The `useDispatch` hook dispatches actions, triggering state updates.
- **Benefits**:  
  Redux ensures consistent state management across all components, eliminates redundant `useState` hooks, and simplifies debugging by consolidating all states in a central location.

---

### **Theme**
The custom Material UI theme from Assignment 9 is reused, maintaining visual consistency across the application. Key highlights include:
- **Primary Color**: `#2ecc71` for interactive elements.
- **Secondary Color**: `#34495e` for containers and card backgrounds.
- **Text Colors**:  
  - `text.primary`: White for high visibility.
  - `text.secondary`: Light gray for captions and less prominent text.
- **Global Styling**:  
  The theme is applied globally using Material UI’s `ThemeProvider` and `CssBaseline`, ensuring a cohesive design language across all pages.

---

## **Backend Changes**

### **User Creation API**
- **Inclusion of User Type**  
  The `/user/create` API now requires a `type` field that must be either `employee` or `admin`. This ensures that every user has a designated role within the application. Validation has been added to confirm that the `type` value matches one of these two options.  

---

### **Job Management APIs**
- **Routes and Controllers**:  
  Two new job-related routes have been introduced to handle job creation and retrieval:
  - **`POST /jobs/create`**: Allows admins to create new job postings.
  - **`GET /jobs/get`**: Lets employees retrieve a list of all available jobs.

- **Jobs Collection**:  
  A new `jobs` collection has been added to the existing `userdb` database. This collection stores all job postings, including details like `companyName`, `jobTitle`, `description`, `salary`, and `location`.

- **Schema and Validation**:  
  The `Job` schema ensures that every job posting adheres to a defined structure:
  - **Required Fields**:  
    - `companyName`: Must be a string and cannot be empty.  
    - `jobTitle`: A non-empty string to identify the role.  
    - `description`: A detailed string outlining the job.  
    - `salary`: A number representing the salary offered.  
    - `location`: A string, validated to ensure it matches general address conventions.
  - The schema catches missing or invalid fields during job creation.

- **The Create Job API**:  
  The `/jobs/create` API not only validates the input but also ensures that only admins can access this route. The payload is checked in the component and also against the schema to confirm all required fields are present. 

- **The Get Jobs API**:  
  The `/jobs/get` API fetches all available jobs from the `jobs` collection. The data is cleanly structured and ready to be consumed by the frontend. 

---

### **Get All Users API**
- **Removal of Password From the Response**:  
  The `/user/getAll` API was tweaked to ensure passwords are excluded from the response. By adding `{ password: 0 }` in the MongoDB query projection, the API now returns all user details except for their passwords. 
