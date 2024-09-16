# Task Manager

This project is a web application built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn**. It is designed to be fast, modular, and easy to customize.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast and modern bundler.
- **TypeScript**: A statically typed superset of JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **shadcn**: Pre-built UI components for React applications.
- **pnpm**: A fast and efficient package manager.
- **Node.js**: JavaScript runtime environment.

## Requirements

- **Node.js** (version 20.11.0)
- **pnpm** (version 9.1.4)

## Installation

First, clone the repository:

```bash
git clone https://github.com/Palo23/task-manager.git
```

Navigate to the app:

```bash
cd ravn-challange
```

Install dependencies

```bash
pnpm install
```

Run in development mode

```bash
pnpm run dev
```

## Screenshots

![Task Default View](assets/screenshots/task.png)
![Dashboard Default View](assets/screenshots/dashboard.png)

## Project Structure

```
└── 📁ravn-challenge
    └── 📁public
        └── 📁images
    └── 📁src
        └── 📁assets
        └── 📁components
            └── 📁ui
                └── accordion.tsx
                └── avatar.tsx
                └── button.tsx
                └── calendar.tsx
                └── card.tsx
                └── combobox.tsx
                └── command.tsx
                └── date-picker.tsx
                └── dialog.tsx
                └── index.ts
                └── input-popover.tsx
                └── input.tsx
                └── popover.tsx
                └── table-title.tsx
                └── task-view-theader.tsx
            └── AvatarComponent.tsx
            └── ErrorBoundary.tsx
            └── FormDialog.tsx
            └── index.ts
            └── InputClear.tsx
            └── NavigationBar.tsx
            └── SideBar.tsx
            └── SideBarItem.tsx
            └── Tag.tsx
            └── TaskAccordion.tsx
            └── TaskCard.tsx
            └── TaskColumn.tsx
            └── TaskForm.tsx
            └── TaskRow.tsx
            └── TaskTags.tsx
            └── TaskViewHeader.tsx
            └── TopNavigationBar.tsx
        └── 📁layout
            └── index.ts
            └── MainLayout.tsx
        └── 📁lib
            └── constants.ts
            └── index.ts
            └── utils.ts
        └── 📁pages
            └── index.ts
            └── NotFound.tsx
            └── TaskManager.tsx
            └── TaskView.tsx
        └── 📁providers
            └── index.ts
            └── RouterProvider.tsx
        └── 📁services
        └── 📁styles
            └── colors.ts
            └── fonts.ts
            └── index.ts
        └── 📁types
            └── add-task.d.ts
            └── index.ts
            └── menu.d.ts
            └── tag.d.ts
            └── task.d.ts
            └── user.d.ts
        └── index.css
        └── main.tsx
        └── vite-env.d.ts
    └── .DS_Store
    └── .env
    └── .env.example
    └── .gitignore
    └── .prettierignore
    └── .prettierrc
    └── components.json
    └── eslint.config.js
    └── index.html
    └── package.json
    └── pnpm-lock.yaml
    └── postcss.config.js
    └── README.md
    └── tailwind.config.js
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
```

## Live Demo

[Task Manager](https://ravn-challenge-tasks.vercel.app/)
