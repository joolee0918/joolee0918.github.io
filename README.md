# Biostatistics Lab Homepage

A modern, colorful React-based homepage for an Associate Professor of Biostatistics, featuring sections for About, Research Areas, Publications, Team, and Contact information.

## Features

- 🎨 **Modern & Colorful Design**: Beautiful gradient backgrounds and smooth animations
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🧩 **Modular Components**: Easy to customize and extend
- 🎯 **Smooth Navigation**: Smooth scrolling between sections
- 💫 **Interactive Elements**: Hover effects and animations throughout

## Project Structure

```
biostat-homepage/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Header.css
│   │   ├── About.jsx            # About/Bio section
│   │   ├── About.css
│   │   ├── Labs.jsx             # Research areas section
│   │   ├── Labs.css
│   │   ├── Publications.jsx     # Publications listing
│   │   ├── Publications.css
│   │   ├── Team.jsx             # Team members section
│   │   ├── Team.css
│   │   ├── Footer.jsx           # Footer with contact info
│   │   └── Footer.css
│   ├── App.jsx                  # Main app component
│   ├── App.css
│   ├── index.css                # Global styles
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

1. Navigate to the project directory:
   ```bash
   cd biostat-homepage
   ```

2. The dependencies are already installed. To run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit:
   ```
   http://localhost:5173
   ```

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Update Your Personal Information

#### Header Component ([src/components/Header.jsx](src/components/Header.jsx))
- Line 18: Replace `[Your Name]` with your actual name

#### About Section ([src/components/About.jsx](src/components/About.jsx))
- Lines 31-42: Update the description paragraphs with your background and research interests
- Lines 44-55: Update the statistics (years of experience, publications count, PhD students)
- Add your photo: Replace the placeholder SVG with an actual image

#### Footer Component ([src/components/Footer.jsx](src/components/Footer.jsx))
- Line 15: Update email address
- Lines 20-21: Update your university and address
- Line 27: Update phone number
- Lines 44-58: Update social media links (Twitter, LinkedIn, GitHub, ORCID)
- Line 67: Update copyright name

### 2. Customize Research Areas

Edit [src/components/Labs.jsx](src/components/Labs.jsx) (lines 5-33):

```javascript
const researchAreas = [
  {
    title: 'Your Research Area',
    icon: '🧬',  // Change emoji icon
    description: 'Your research description',
    topics: ['Topic 1', 'Topic 2', 'Topic 3']
  },
  // Add more research areas...
];
```

### 3. Update Publications

Edit [src/components/Publications.jsx](src/components/Publications.jsx) (lines 5-47):

```javascript
const publications = [
  {
    year: 2024,
    title: 'Your Paper Title',
    authors: 'Your Name, Co-author, et al.',
    journal: 'Journal Name',
    impact: 'High Impact',  // or 'Medium Impact'
    link: 'https://link-to-paper.com'
  },
  // Add more publications...
];
```

### 4. Update Team Members

Edit [src/components/Team.jsx](src/components/Team.jsx) (lines 5-42):

```javascript
const teamMembers = [
  {
    name: 'Student Name',
    role: 'PhD Candidate',  // or 'Postdoctoral Fellow', 'MS Student'
    research: 'Research area',
    email: 'email@university.edu',
    color: 'gradient1'  // Options: gradient1, gradient2, gradient3, gradient4
  },
  // Add more team members...
];
```

### 5. Customize Colors

The site uses gradient color schemes. To change the main colors:

#### Primary Gradient (Header, scrollbar)
Edit [src/components/Header.css](src/components/Header.css) line 2 and [src/index.css](src/index.css) line 62:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

#### Section Headers
Each section has its own gradient. Edit the respective CSS files:
- About: [src/components/About.css](src/components/About.css) line 39
- Labs: [src/components/Labs.css](src/components/Labs.css) line 18
- Publications: [src/components/Publications.css](src/components/Publications.css) line 24
- Team: [src/components/Team.css](src/components/Team.css) line 99

### 6. Add Your Photo

Replace the placeholder in [src/components/About.jsx](src/components/About.jsx):

1. Add your photo to `src/assets/` (e.g., `profile.jpg`)
2. Import it at the top of About.jsx:
   ```javascript
   import profileImage from '../assets/profile.jpg';
   ```
3. Replace the SVG placeholder (lines 12-17) with:
   ```javascript
   <img src={profileImage} alt="Your Name" />
   ```
4. Update the CSS in [src/components/About.css](src/components/About.css) to style the image

## Deployment

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/biostat-homepage",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Vite settings

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features (gradients, flexbox, grid)
- **ES6+** - Modern JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is free to use for academic purposes.

## Support

If you need help customizing your homepage, refer to the comments in the source files or the React documentation at https://react.dev

---

Built with ❤️ for Academic Research
