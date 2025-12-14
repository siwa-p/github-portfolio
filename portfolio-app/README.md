# Portfolio Website - Prahlad Siwakoti

A modern, responsive portfolio website built with React + Vite showcasing data science and data engineering projects.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with gradient headers and card-based project layouts
- **Dynamic Content**: All portfolio content is managed through a centralized data file
- **Fast Performance**: Built with Vite for optimal build times and performance
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## Project Structure

```
portfolio-app/
├── public/
│   ├── images/          # Project images
│   └── pdf/             # Resume and project documentation
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── ProjectCard.jsx
│   ├── data/
│   │   └── portfolioData.js  # Portfolio content data
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── index.html
```

## Development

### Prerequisites
- Node.js (v20 or higher)
- npm

### Installation

```bash
cd portfolio-app
npm install
```

### Running Locally

**Option 1: Development Server** (with hot module replacement)
```bash
npm run dev
```
Then open http://localhost:5173

**Note**: If you encounter file watcher errors on Linux, run:
```bash
sudo sysctl fs.inotify.max_user_watches=524288
```

**Option 2: Preview Build**
```bash
npm run build
npm run preview
```
Then open http://localhost:4173

### Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages via GitHub Actions.

### Setup:

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push to your branch**:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin <your-branch-name>
   ```

3. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy
   - Your site will be available at: `https://<username>.github.io/github-portfolio/`

### Manual Deployment:

You can also trigger deployment manually from the GitHub Actions tab.

## Updating Content

To update your portfolio content, edit the file:
- `src/data/portfolioData.js`

This file contains:
- Personal information (name, contact, bio)
- All project details
- Links to GitHub repositories, documentation, etc.

## Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and development server
- **CSS3** - Styling with modern features
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting

## License

© 2025 Prahlad Siwakoti. All rights reserved.
