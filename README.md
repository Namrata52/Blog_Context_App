# Blogs Context App

A React application that demonstrates dynamic blog filtering and navigation using **Context API** and **React Router**. The app allows users to browse blogs by categories and tags while maintaining URL-based state and supporting pagination.

## Features

* 📝 Display blogs using the React Context API
* 🏷️ Filter blogs by tags using `useLocation` and `useSearchParams`
* 📂 Filter blogs by categories with dynamic routing
* 🔄 Automatically display all blogs associated with a selected tag or category
* 📄 Pagination with 6 blogs per page
* ⏭️ Navigate between pages using **Next** and **Previous** controls powered by `useNavigate`
* 🔗 URL-aware navigation using `location.pathname` and `location.search`
* ⚡ Client-side routing with React Router for a smooth user experience

## Technologies Used

* React
* Context API (`useContext`)
* React Router
* `useLocation`
* `useSearchParams`
* `useNavigate`

## How It Works

* Clicking on a **tag** updates the URL and displays all blogs containing that tag.
* Clicking on a **category** filters and displays all blogs belonging to that category.
* The application reads query parameters and path information using `useLocation`, `useSearchParams`, `location.pathname`, and `location.search` to determine what content to render.
* Blog data is shared across components through the **Context API**, eliminating unnecessary prop drilling.
* Pagination limits the displayed results to 6 blogs per page and provides intuitive navigation between pages.

## Learning Objectives

This project showcases practical usage of:

* React Context API for state management
* URL-based filtering and routing
* Query parameter handling with `useSearchParams`
* Route information with `useLocation`
* Programmatic navigation using `useNavigate`
* Pagination logic in React applications

## Getting Started

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm start
   ```
4. Open the application in your browser and explore blogs by tags, categories, and paginated pages.
