# 🌿 FARAFATSI Association Website

Official technical documentation for the FARAFATSI Association web project.
This project is a multilingual (French/English) one-page showcase website, optimized for search engine optimization (SEO) and performance (static export) built with the latest web technologies.

---

## 🔗 Quick Links & Resources

*   **Source Code Repository:** [https://github.com/satroka17/farafatsi.git](https://github.com/satroka17/farafatsi.git)
*   **Live Preview (Temporary):** [https://farafatsi.vercel.app/](https://farafatsi.vercel.app/)

---

## 📦 Deliverables Overview

This project is delivered in two parts:

1.  **🗂️ Source Code:**
    *   Contains all the development files (`.tsx`, `.ts`, `.json`).
    *   **Purpose:** Use this if you need to make changes to the code, design, or text in the future.
    *   **Requires:** Node.js installed to run.

2.  **🚀 Production Build (The `out` folder):**
    *   Contains the final HTML/CSS/JS files ready for hosting.
    *   **Purpose:** This is what you upload to your host (Hostinger, cPanel, VPS).
    *   **Requires:** No installation needed. Just drag and drop.

---

## 🛠️ Tech Stack & Versions

This project uses cutting-edge technologies (2025/2026 standards) to ensure longevity and security.

| Technology | Version | Role |
| :--- | :--- | :--- |
| **Next.js** | `16.1.6` | React Framework (App Router) |
| **React** | `19.2.3` | UI Library (Server Components) |
| **Next-Intl** | `4.8.3` | Internationalization (i18n) |
| **Tailwind CSS** | `4.1.18` | Styling Framework |
| **TypeScript** | `5.9.3` | Type Safety |
| **Node.js** | `20.x` or `22.x` | Required for development |

---

## 📂 Project Structure (Developer Guide)

Key locations for modifying the website:

```text
frontend/
├── app/                        # Main Application Logic
│   ├── [locale]/               # Dynamic Language Folder (fr or en)
│   │   ├── layout.tsx          # Global Layout (SEO, Navbar, Footer)
│   │   └── page.tsx            # THE MAIN PAGE (One Page structure)
│   └── page.tsx                # Root redirect (/) to (/fr)
│
├── components/                 # Reusable UI Blocks
│   ├── Navbar.tsx              # Navigation & Donation Link Logic
│   ├── Footer.tsx              # Footer section
│   ├── ContactForm.tsx         # Contact Form (Client Component)
│   ├── MemberCard.tsx          # Team Member UI
│   └── ActivityCard.tsx        # Project/Activity UI
│
├── i18n/                       # Configuration
│   └── request.ts              # Translation loader config
│
├── messages/                   # 📝 TRANSLATION FILES (Edit text here)
│   ├── fr.json                 # French Content
│   └── en.json                 # English Content
│
├── public/                     # 🖼️ IMAGES & LOGOS
│   ├── logo-farafatsi.jpg
│   ├── hero-action.jpeg
│   └── ...
│
├── next.config.ts              # Technical Config (Static Export settings)
└── package.json                # Dependencies list
________________________________________
🚀 How to Run Locally (Source Code)
If you need to edit the source code:
1.	Install Node.js (LTS version) on your computer.
2.	Open the project folder in your terminal.
3.	Install dependencies:
npm install
4.	Start the development server:
npm run dev
5.	Open your browser at http://localhost:3000.
________________________________________
📝 Configuration & Customization Guide
1. Editing Text & Content
You do not need to touch the code to change the text.
•	Navigate to the messages/ folder.
•	Open fr.json (French) and en.json (English).
•	Modify the text inside the quotes.
o	Example: To change the main title, find "Hero": { "title": "..." }.
2. Updating the Donation Link
•	Open components/Navbar.tsx.
•	At the very top of the file, update the constant:
const DONATION_LINK = "https://your-donate-link.com";
3. Configuring the Contact Form
The form uses FormSubmit.co (AJAX version).
•	Open components/ContactForm.tsx.
•	Find the line: const endpoint = "https://formsubmit.co/ajax/YOUR_EMAIL@GMAIL.COM";
•	Replace the email address with the association's email.
•	Important: The first time you test the form, you will receive a confirmation email. Click "Activate" in that email.
4. Updating Images
•	Place new images in the public/ folder.
•	If you keep the same filename, it updates automatically.
•	If you change the filename, update the reference in app/[locale]/page.tsx (e.g., src="/new-image.jpg").
________________________________________
🏗️ Deployment Guide
This site is configured as a Static Export (output: 'export'). It does not require a Node.js server in production.
Step 1: Generate the Production Build
Stop the dev server (Ctrl+C) and run:
npm run build
Step 2: Locate the Files
A folder named out will be created at the project root.
•	It contains fr/, en/, index.html, and _next/.
•	This out folder is what you deliver to the hosting provider.
Step 3: Hosting Instructions
Option A: Hostinger / cPanel (Shared Hosting)
1.	Open your File Manager.
2.	Navigate to public_html.
3.	Upload all the contents of the out folder directly into public_html.
Option B: VPS 
________________________________________
⚙️ Technical Notes
•	Static Export: Enabled in next.config.ts (output: 'export').
•	Trailing Slash: Enabled (trailingSlash: true). This forces Next.js to create folders (/fr/index.html) instead of flat files (fr.html), which fixes "403 Forbidden" errors on strict servers like Nginx/Apache.
•	Image Optimization: unoptimized: true is enabled to allow static hosting without an image processing server.
________________________________________
Support
Developed by Klik Tech .
For major technical updates, please refer to this documentation or the GitHub repository.

