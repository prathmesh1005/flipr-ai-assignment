Company Landing + Admin Panel

A full-stack web application featuring a public landing page and a protected admin panel for managing content.

Features

=Landing Page
- Hero Section: Eye-catching banner with integrated contact form
- Why Choose Us: Feature cards highlighting key benefits
- About Us: Company information section
- Our Projects: Dynamic project showcase with images
- Happy Clients: Client testimonials with photos
- Newsletter: Email subscription functionality
- Responsive Design: Mobile-first approach using Tailwind CSS

=Admin Panel
- Project Management: Add projects with image upload and auto-resize (450×350)
- Client Management: Add client testimonials with photos
- Contact Submissions: View all contact form entries
- Newsletter Subscribers: Manage email subscriptions
- Simple Authentication: JWT-based admin access

Tech Stack

=Frontend
- Framework: React 18 with Vite
- Styling: Tailwind CSS
- Routing: React Router v6
- HTTP Client: Axios
- Notifications: React Hot Toast

=Backend
- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB with Mongoose
- Image Processing: Multer + Sharp
- Authentication: JWT
- Validation: Express Validator

## 📁 Project Structure

```
company-landing-admin/
├── Backend/
│   ├── controllers/
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API endpoints
│   ├── middlewares/     # Upload, auth, image processing
│   ├── uploads/         # Uploaded images (auto-created)
│   ├── server.js        # Express app entry point
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Landing & Admin pages
│   │   ├── api/         # Axios configuration
│   │   └── main.jsx     # React entry point
│   ├── index.html
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation


1. Backend Setup
```bash
cd Backend
npm install

# Create .env file
cp .env.example .env
# Edit .env and add your MongoDB URI
```

3. Frontend Setup
```bash
cd ../Frontend
npm install

# Create .env file (optional)
cp .env.example .env
```

Running the Application

1. Start Backend Server**
```bash
cd Backend
npm run dev
-Server runs on http://localhost:5000
```

2. Start Frontend (in new terminal)**
```bash
cd Frontend
npm run dev
-App runs on http://localhost:5173
```

Admin Access
- Navigate to `/admin`
- Default password: `admin123`
- Change this in production!

API Endpoints

=Public Endpoints
- `GET /api/projects` - Fetch all projects
- `GET /api/clients` - Fetch all clients
- `POST /api/contact` - Submit contact form
- `POST /api/subscribe` - Subscribe to newsletter

=Admin Endpoints (Requires JWT)
- `POST /api/admin/login` - Admin login
- `POST /api/admin/projects` - Create project (multipart)
- `POST /api/admin/clients` - Create client (multipart)
- `GET /api/admin/contacts` - List contact submissions
- `GET /api/admin/subscribers` - List subscribers



Images uploaded through the admin panel are automatically:
- Resized to 450×350 pixels
- Cropped to fit with center positioning
- Compressed to 85% JPEG quality
- Saved to `/uploads` directory

Deployment

=Backend Deployment (Render/Railway/Heroku)
1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables
4. Deploy

=Frontend Deployment (Vercel/Netlify)
1. Push code to GitHub
2. Connect repository
3. Build command: `npm run build`
4. Output directory: `dist`
5. Set `VITE_API_URL` environment variable

=MongoDB Atlas Setup
1. Create free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Whitelist IP: `0.0.0.0/0` (for testing) or specific IPs
3. Create database user
4. Get connection string and add to `.env`


Security Notes

=For Production:
- Change admin password and implement proper user authentication
- Use strong JWT_SECRET (random 64+ character string)
- Enable CORS only for your frontend domain
- Set up rate limiting for API endpoints
- Use HTTPS for all deployments
- Sanitize all user inputs
- Add MongoDB IP whitelist restrictions

Development Notes

- CORS is configured to accept requests from `http://localhost:5173`
- Image uploads limited to 5MB
- Accepted formats: JPEG, JPG, PNG, GIF, WebP
- Vite proxy forwards `/api` and `/uploads` to backend in development

Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

License

This project is open source and available under the MIT License.

Troubleshooting

MongoDB Connection Failed:
- Verify MongoDB URI in `.env`
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

Images Not Loading:
- Check `/uploads` directory exists
- Verify file permissions
- Check image paths in database

CORS Errors:
- Update `CLIENT_URL` in backend `.env`
- Restart backend server after changes

Support

For issues and questions, please open an issue on GitHub.
