# Vehicle Rental System (VRS)

**Vehicle Rental System (VRS)** is a multi-user rental management system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Material UI for the user interface. It allows administrators to manage vehicle inventory and users to browse, request, and manage rentals. The platform functions as an online vehicle rental system, enabling reservation, issuance, and management of vehicles across various categories.

## Features

### Roles and Responsibilities
The VRS application supports two distinct roles: Administrator and User. Each role has specific responsibilities and permissions within the system to ensure efficient rental operations and vehicle management.

- **Administrator**
  - Manage vehicle categories and inventory.
  - Monitor users and track rental statistics.
  - Approve or reject rental requests.
  - Revoke rentals.
  
- **User**
  - Browse available vehicles and categories.
  - Request vehicles
  - Update profile

### Core Functionalities

1. **Authentication and Authorization**
   - Role-based access control using JWT tokens.
   - Single administrator role maintained in the system.

2. **Administrator Dashboard**
   - View application statistics: active users, total categories, total vehicles, and total rentals.
   - View all registered users and delete users if necessary.

3. **User Dashboard**
   - View all rented vehicles.
   - Manage rental requests and view status.
   - Provide feedback on rented vehicles.

4. **Category Management** - for the administrator
   - **Manage Categories:** Create, update, and delete categories (e.g., SUV, Sedan, Electric).
   - **Display Categories:** View categories in a table with fields for name, description, and creation date, with options for editing and deleting.

5. **Vehicle Management** - for the administrator
   - **Manage Vehicles:** Add, edit, and remove vehicles within categories.
   - **Display Vehicles:** View vehicles in a table with fields for name, model, and category, with options for editing and deleting.
   - **Search and Filter:** Search vehicles by name, model, or category, with options to clear filters.

6. **Request Management** - for the administrator
   - **View Requests:** Display pending requests and active rentals in separate tables. Each table includes columns for vehicle name, username, and action buttons.
   - **Handle Requests:** Approve or reject rental requests with corresponding buttons. Update the status of requests accordingly.
   - **Revoke Rentals:** Revoke vehicles from users if their rental period has expired or if needed. This updates the rental status and removes the user's access.

7. **Feedback Management** - for the administrator
   - **View Feedbacks:** Display feedbacks in a table with columns for vehicle name, username, comment, rating, and action. Includes options for deleting feedback.
   - **Delete Feedback:** Delete feedback items with a confirmation dialog.
  
8. **Available Vehicles** - for the user
   - **Search and Filter:** Allows users to search for vehicles by name, model, and category, with options to clear filters.
   - **Vehicle Listing:** Displays a table of available vehicles with columns for name, model, and category. Includes a "Request" button for users to initiate a rental request.

## Installation

### Clone the Repository
```bash
git clone https://github.com/nivin2004/vrs.git

```
Navigate to the root directory of the project
```bash
cd vrs
```

### Backend Setup
1. Open a new terminal in the project's root directory and navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Create a `.env` file in the backend directory and add the following content:
    ```env
    MONGO_URI=your_mongo_db_uri_here
    JWT_SECRET=your_jwt_secret_here
    DEFAULT_admin_USERNAME=your_default_admin_username_here
    DEFAULT_admin_EMAIL=your_default_admin_email_here
    DEFAULT_admin_PASSWORD=your_default_admin_password_here
    ```
    Replace `your_mongo_db_url_here`, `your_jwt_secret_here`, `your_default_admin_username_here`, `your_default_admin_email_here`, and `your_default_admin_password_here` with your actual MongoDB connection URL, JWT secret, and admin credentials.
   
3. Install dependencies:
    ```bash
    npm install
    ```

4. Create the admin in the system:
    ```bash
    npm run create-admin
    ```
    
5. Run the backend server:
    ```bash
    npm start
    ```
    The backend will start at [http://localhost:5000](http://localhost:5000)

   ### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
    
2. Install dependencies:
    ```bash
    npm install
    ```
    
3. Run the frontend:
    ```bash
    npm start
    ```
    Access the application at [http://localhost:3000](http://localhost:3000)


