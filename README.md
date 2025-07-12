# LearnTailwind

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

---

## 🚀 Tailwind Navbar Variants for Angular

This project also includes a growing collection of **modern, responsive navbar layouts** built using **TailwindCSS**, **DaisyUI**, and **Angular**.

Each variant is mobile-first, fully styled, and easily reusable in any Angular app.

---

## 🔧 TailwindCSS + DaisyUI Setup

Follow these steps to add Tailwind and DaisyUI to this Angular project.

-----------------------------------------------------------------------------------
### 1. Install Angular CLI (if needed)
npm install -g @angular/cli@latest
------------------------------------------------------------------------------------

--------------------------------------------------------------------------
2. Create a New Angular Project
ng new my-project --style css
cd my-project
-------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
3. Install Tailwind, DaisyUI & PostCSS
npm install daisyui@latest tailwindcss@latest @tailwindcss/postcss@latest postcss@latest --force
---------------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------------------------
4. Add Tailwind to PostCSS config
Create a .postcssrc.json file in the root of the project:
paste this:
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}

---------------------------------------------------------------------------------------------------
5. Configure styles.css
Replace src/styles.css with:

@import "tailwindcss";

@plugin "daisyui" {
  themes: all, light;
}

---------------------------------------------------------------------------------------------------
📁 Navbar Variants Included
Variant	Description
✅ Centered Rounded Navbar	Card-like layout, with margins and rounded corners
✅ Sidebar Navbar (Mobile)	Mobile-first menu that slides in from the left
✅ Bottom Nav (Mobile Style)	Fixed bottom navigation bar with icons
✅ Transparent Scroll Nav	Starts transparent, turns solid on scroll
✅ Avatar Dropdown Menu	Profile image with dropdown for account actions

🎮 Component Usage in Angular
Add the following variables in any component using the navbars:
menuOpen = false;
menuOpenV2 = false;
sidebarOpen = false;
sidebarOpenV2 = false;

These booleans control visibility of dropdowns and sidebars via *ngIf or ngClass.

