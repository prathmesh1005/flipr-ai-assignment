# Admin Dashboard Setup Guide

## Overview
The application includes an admin dashboard for managing projects, clients, contacts, and subscribers.

## Admin Routes

### Frontend
- **Admin Dashboard**: `https://flipr-ai-assignment.vercel.app/admin`
- **Landing Page**: `https://flipr-ai-assignment.vercel.app/`

### Backend API Endpoints

#### Authentication
- `POST /api/admin/login` - Admin login
  - Body: `{ "password": "admin123" }`
  - Returns: JWT token

#### Projects (Admin Only)
- `POST /api/admin/projects` - Create new project
  - Auth: Required (Bearer token)
  - Body: FormData with `image`, `name`, `description`

#### Clients (Admin Only)
- `POST /api/admin/clients` - Create new client
  - Auth: Required (Bearer token)
  - Body: FormData with `image`, `name`, `description`, `designation`

#### Contacts (Admin Only)
- `GET /api/admin/contacts` - Fetch all contact submissions
  - Auth: Required (Bearer token)

#### Subscribers (Admin Only)
- `GET /api/admin/subscribers` - Fetch all newsletter subscribers
  - Auth: Required (Bearer token)

## Accessing the Admin Dashboard

1. Navigate to `/admin` route
2. Enter the admin password: `admin123`
3. You'll be redirected to the admin panel with tabs for:
   - **Projects**: Add/manage projects
   - **Clients**: Add/manage client testimonials
   - **Contacts**: View contact form submissions
   - **Subscribers**: View newsletter subscribers

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://flipr-ai-assignment.onrender.com
```

### Backend (.env)
```
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
NODE_ENV=production
CLIENT_URL=https://flipr-ai-assignment.vercel.app
```

## Security Note

⚠️ **IMPORTANT**: Change the default admin password in production!

To change the password, edit `Backend/routes/admin.js` line 13:
```javascript
if (password === 'admin123') {  // Change this!
```

## Features

### Projects Management
- Upload project images (auto-resized to 450x350px)
- Add project name and description
- Images are optimized and stored on the server

### Clients Management
- Upload client photos
- Add client testimonials
- Set client designation/role
- Display in carousel on landing page

### Contact Submissions
- View all contact form submissions
- Shows name, email, message, and timestamp

### Newsletter Subscribers
- View all newsletter signup emails
- Manage mailing list

## Deployment

Both frontend and backend are deployed and accessible:
- **Frontend**: https://flipr-ai-assignment.vercel.app
- **Backend**: https://flipr-ai-assignment.onrender.com

Admin dashboard is fully functional in production.
