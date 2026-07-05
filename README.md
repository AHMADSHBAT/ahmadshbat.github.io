# Ahmad Shbat — Professional Portfolio Website

Welcome to the official source repository for my professional portfolio website. It features an interactive, highly optimized single-page structure designed to highlight my expertise in **Automotive Embedded Systems**, **Automotive Cyber Security**, and **Deep Learning Model Fine-Tuning**.

Live Website: [https://ahmadshbat.github.io](https://ahmadshbat.github.io)

---

## 🛠️ Technology Stack & Architectures
- **Style Ecosystem:** [Tailwind CSS Custom CDN Architecture](https://tailwindcss.com) featuring smooth transitions, beautiful micro-glow structures, custom layout spacing, and pure CSS variables.
- **Icon Packages:** [FontAwesome Professional Pack](https://fontawesome.com/) vectors.
- **Client Interactions:** Vanilla ES6 Javascript managing:
  - System or user-defined **Dark Mode** toggle memory (`localStorage` caching).
  - Dynamic **Hero Typewriter Animators** looping skill arrays.
  - Interactive **Ecosystem Category Filters** (AI & Deep Learning, Automotive Embedded, Security & Systems).
  - **Scroll Reveal Triggers** transitioning section cards on scroll.
  - Form validation with local simulated toast persistence.

---

## 📂 Repository Layout
-  [index.html](index.html) — Single-page HTML entry point detailing Skills, Career Timeline, Portfolio Cards, and Contact portals.
-  [css/style.css](css/style.css) — Customized animators, glassmorphism filters, scrollbars, and toast animations.
-  [js/script.js](js/script.js) — Lightweight client dynamics, scrolling hooks, filters, and theme utilities.

---

## 🚀 Deployment Instructions

### 1. Renaming the GitHub Repository
To publish this website directly on the root of your GitHub Pages site profile, name or rename your GitHub repository to exactly:
```text
ahmadshbat.github.io
```

### 2. Updating Git Remotes
If you previously initialized a repository using a different name, open your terminal (PowerShell or Git Bash) inside this directory and run:
```powershell
# Verify your current remote list
git remote -v

# Point it to your correct newly renamed username repository
git remote set-url origin https://github.com/ahmadshbat/ahmadshbat.github.io.git
```

### 3. Commit & Push Code
Push your final localized modifications up to the remote repository. Run:
```powershell
# Add all newly formatted changes
git add .

# Create a clean message commit
git commit -m "Initialize professional embedded and machine learning engineering portfolio"

# Push to your main branch
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository **Settings** page on GitHub.
2. Click on **Pages** in the left sidebar menu under "Code and automation".
3. Under **Build and deployment**, select **Deploy from a branch** for Source.
4. Under **Branch**, select `main` (or the branch you pushed to) and `/ (root)`, then click **Save**.
5. Your modern portfolio will trigger deployment and will be fully online at [https://ahmadshbat.github.io](https://ahmadshbat.github.io) within seconds!
