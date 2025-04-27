# AfyaLine

AfyaLine is a Health Information Management System for managing clients and programs, built using:

- **Backend**: Django + Django REST Framework
- **Frontend**: React + TypeScript + Vite + Chakra UI
- **State Management**: `useState` + `useEffect`
- **Form Validation**: React Hook Form + Zod
- **API Documentation**: Swagger UI

---

## Features

- Manage Clients (Add, View Details, List, Register)
- Manage Programs (Add, View Details, List, Register)
- Dashboard Overview
- Responsive Design with Sidebar / Mobile Drawer
- Fast and lightweight setup
- API integration using Axios
- Simple and clean state management using `useState` and `useEffect`
- **API Documentation**: Easily explore and test the API using Swagger UI

---

## Project Structure

### Backend (`backend/`)

- Django project: REST APIs for Clients, Programs, and Enrollments
- Endpoints:
  - `/api/clients/`
  - `/api/programs/`
  - `/api/enrollments/`
- **API Documentation**: [Swagger UI](http://localhost:8000/api/schema/swagger-ui/)

### Frontend (`frontend/`)

- Pages and Routes:
  - `/` → Dashboard
  - `/clients` → Clients List
  - `/clients/:id` → Client Details
  - `/clients/register` → Client Registration
  - `/programs` → Programs List
  - `/programs/:id` → Program Details
  - `/programs/register` → Program Registration
- Organized by:
  - `routes/` → Route configurations
  - `pages/` → Pages
  - `components/` → Reusable UI elements like Sidebar
  - `services/` → Axios API calls
  - `hooks/` → Custom hooks for API interactions
  - `interfaces/` → TypeScript interfaces

---

## Getting Started

### Backend Setup

1. Move into the backend directory

   ```bash
   cd backend
   ```

2. Create a virtual environment

   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment

   ```bash
   # For macOS/Linux
   source venv/bin/activate

   # For Windows
   venv\Scripts\activate
   ```

4. Install dependencies

   ```bash
   pip install -r requirements.txt
   ```

5. Apply migrations

   ```bash
   python manage.py migrate
   ```

6. Run the server

   ```bash
   python manage.py runserver
   ```

7. **API Documentation**: Access Swagger UI at [http://localhost:8000/api/schema/swagger-ui/](http://localhost:8000/api/schema/swagger-ui/)

---

### Frontend Setup

1. Move into the frontend directory

   ```bash
   cd frontend
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

---

## State Management

- **`useState`** for holding API data, loading, and error states
- **`useEffect`** for fetching data on mount or based on dependencies
- **Axios** used for making HTTP requests
