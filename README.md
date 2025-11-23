# Food Delivery App

A responsive Next.js project built during my React course — your go-to place for exploring and ordering delicious meals

## What is Food Delivery App

This app lets users browse restaurants, explore menus, and order food

It includes:
- **Home Page**: Intro screen with a link to explore restaurants
- **Restaurants Layout**: Tabs showcasing all available restaurant options
- **Restaurant Page**: Each restaurant’s page includes Menu and Reviews tabs
- **Menu Page**: Clickable list of menu items
- **Dish Page**: Detailed view of a selected dish with ingredients and price
- **Reviews Page**: Displays restaurant reviews
- **Logged-In Users**: 
  - Can add dishes to cart from the Dish Page
  - Can post reviews on the Reviews Page

## Technical Overview

Food Delivery App is built using **Next.js** with the **App Router** and **Redux Toolkit** for state management

### App Structure:

- Server and Client Components: Structured for efficient data fetching and optimal performance using SSR
- Pages: Layout-level route components that get data from the URLs. For example: [RestaurantPage](./src/components/pages/RestaurantPage.jsx)
- Container Components: Handle data fetching, pass props, and delegate UI to child components. For example: [RestaurantContainer](./src/components/Restaurant/Restaurant-container.jsx)
- Presentational Components: Focus on UI rendering. For example: [Restaurant](./src/components/Restaurant/Restaurant.jsx)

### Core Features:

**Next.js App Router**:
- File-system based routing
- Layouts for shared content
- Suspense for async data fetching (shows a loading fallback while fetching)

**State Management and Hooks**:
- `useState`: Manages local state in [ProgressBar](./src/components/ProgressBar/ProgressBar.jsx), theme context and user context
- `useEffect`: Adds and cleans up scroll event listeners in [ProgressBar](./src/components/ProgressBar/ProgressBar.jsx)
- `createContext`: Provides user, logged-in user, and theme contexts. Example: [UserContext](./src/components/User-context/index.js)
- `useCallback`: Memoizes count logic in [useCount](./src/components/Dishes-counter/useCount.js)
- `use`: Reads context values. Example: [LogInUser](./src/components/LogInUser/LogInUser.jsx)
- `usePathname`: Reads the current URL’s pathname. Example: [TabLink](./src/components/TabLink/TabLink.jsx)
- `useRef`: Manipulates the form's input field directly, avoids unnecessary re-renders in [ReviewForm](./src/components/ReviewForm/ReviewForm.jsx)
- Custom Hook - [useCount](./src/components/Dishes-counter/useCount.js): Adds/removes dishes from the cart

**Redux with Redux Toolkit**:
- **Store**: Manages global cart state
- `cartSlice`: Contains reducers and selectors for adding/removing items from the cart
- `useSelector`: Extracts data from the Redux store for use in components

**Additional Functionality**:
- `generateMetadata`: Dynamically generates restaurant titles for SEO
- **Theme Switcher**: Toggles between light and dark modes
- **ProgressBar**: Gives visual feedback during scroll
- **Fallbacks**: Custom pages for NotFound and RootError

**Node.js mock API server**: Simulates backend endpoints for restaurants, dishes, reviews, and users, using normalized data

**Styled Components**: Handles CSS styling

**Developer Tools**:
- **ESLint**: Ensures clean, consistent code
- **Prettier**: Handles code formatting

**Deployment & CI/CD**:

- Continuous Integration: Set up with CircleCI for automated testing and builds on every commit
- Deployment: Automatically deployed to Netlify on successful builds, Render ???? 
- Lighthouse CI (LHCI): runs automatically in the CI pipeline to audit web performance, accessibility, SEO, and best practices

## How to start locally
Start the Next.js dev server:
```shell
npm run dev
```

In another terminal tab, start the API server:
```shell
npm run start-server
```
---

Built as part of a React course project to explore modern React concepts using Next.js App Router and Redux Toolkit