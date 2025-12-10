# Assets Directory

This directory is for static assets used in the frontend application.

## Structure

```
assets/
├── images/       # Images, logos, icons
├── fonts/        # Custom fonts (if any)
└── README.md     # This file
```

## Usage

Import assets in your React components:

```jsx
import logo from '../assets/images/logo.png';

function Header() {
  return <img src={logo} alt="Logo" />;
}
```

## Notes

- User-uploaded images go to `Backend/uploads/` (managed by the backend)
- This directory is for static assets bundled with the frontend
- Optimize images before adding them here
- Use appropriate formats: PNG for logos, JPG for photos, SVG for icons
