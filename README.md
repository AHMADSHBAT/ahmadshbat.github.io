# Ahmad Ashbat Personal Website

Welcome to the repository of my personal portfolio and developer website. It is designed to be fully responsive, lightweight, visually appealing, with a modern glassmorphic look, customizable typing animations, and custom features such as lightweight client-side project filtering and user messaging.

Live Site: [https://ahmadashbat.github.io](https://ahmadashbat.github.io)

## 🌟 Key Features

- **Responsive Modern Grid UI**: Designed with Tailwind CSS.
- **Dynamic Dark/Light Mode Selector**: Remembers user selection via `localStorage` with a beautiful toast notification.
- **Self-typing Banner Hero**: Showcases multiple tech skills automatically.
- **Modular Project Grid**: Sort and filter projects dynamically without full page reloads.
- **Embedded Career Journey Chronology**: Modern responsive timeline of my career and education path.
- **Simulated Secure Message Dispatch**: Stored messages inside browser's local sandbox safely.
- **Fade-on-Scroll Reveals**: Uses high performance `IntersectionObserver` principles for sleek entrances.

---

## 🛠️ File Structure

The project has a clean, lightweight semantic structure:

```
ahmadashbat.github.io/
├── index.html        # Core markup, assets linking, structural grids, tailwind definitions
├── css/
│   └── style.css     # Custom animations, custom scrollbar, glassmorphic filters, float blobs
└── js/
    └── script.js     # Responsive trigger menus, light/dark controller, project filters, toasts
```

---

## 🚀 Local Development

To run this website locally on your computer:

```bash
# 1. Clone this repository
git clone https://github.com/ahmadashbat/ahmadashbat.github.io.git

# 2. Enter the directory
cd ahmadashbat.github.io

# 3. Serve local files (Choose any HTTP server utility)
# Example using Python:
python -m http.server 8000

# Or using Node.js:
npx serve .
```

Then visit `http://localhost:8000` or `http://localhost:3000` in your web browser.

---

## 🛰️ How to Deploy to GitHub Pages

Since this repository is named `ahmadashbat.github.io` (a User Page repository matching your username):

1. **Commit and Push to GitHub**:
   Make sure all files are in the root directory. Initialize a git repository, commit, and push it to your `main` branch.
   ```bash
   git init
   git add .
   git commit -m "Initialize modern portfolio web assets"
   git branch -M main
   git remote add origin https://github.com/ahmadashbat/ahmadashbat.github.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   Go to your GitHub repository dashboard:
   - Navigate to **Settings** > **Pages** (under the Code and automation sidebar section).
   - Under **Build and deployment**, select **Deploy from a branch** as the source.
   - Select your deploy branch (usually `main`) and folder `/ (root)`.
   - Click **Save**.

The page is generally automatically built and deployed worldwide at `https://ahmadashbat.github.io` in under 2 minutes!

---

## 📝 Customization Instructions

- **Update Info/Bio**: Modify titles and biography content blocks directly in [index.html](index.html).
- **Update Skills**: Modify progress percentages (e.g., `style="width: 90%;"`) and labels within the toolkit section of [index.html](index.html).
- **Add Projects**: Insert a new `div` block with a `.project-card` class inside the `#projects` grid in [index.html](index.html). Define the appropriate filter categories (`data-category="web"`, `data-category="api"`, or `data-category="ai"`).
- **Edit Typing Titles**: Update the `roles` array inside [js/script.js](js/script.js) to customize the rotating typewriter roles in your hero presentation.
