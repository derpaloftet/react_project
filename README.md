# Food Delivery App

A responsive Next.js project built during my React course — your go-to place for exploring and ordering delicious meals

## What is Food Delivery App

This app lets users browse restaurants, explore menus, and order food

It features:
- **Home Page**: Intro screen with a link to explore restaurants
- **Restaurants Layout**: Tabs showcasing all available restaurant options
- **Restaurant Page**: Each restaurant’s page includes Menu and Reviews tabs
- **Menu Page**: Clickable list of menu items
- **Dish Page**: Detailed view of a selected dish with ingredients and price
- **Reviews Page**: Displays restaurant reviews
- **Logged-In Users**: 
  - Can add dishes to cart from the Dish Page
  - Can post reviews on the Reviews Page
    
## How to start locally
Start the Next.js dev server:
```shell
npm run dev
```

In another terminal tab, start the API server:
```shell
npm run start-server
```

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

**Node.js mock API server**: Simulates backend endpoints for restaurants, dishes, reviews, and users, using normalized data

**Styled Components**: Handles CSS styling

**State Management and Hooks**:
- `useState`: Manages state for [ProgressBar](./src/components/ProgressBar/ProgressBar.jsx), theme context and user context
- `useEffect`: Adds and cleans up scroll event listeners for the [ProgressBar](./src/components/ProgressBar/ProgressBar.jsx)to be able to scroll
- `createContext`: Provides user, logged-in user, and theme contexts. Example: [UserContext](./src/components/User-context/index.js)
- `useCallback`: Memoizes count logic in [useCount](./src/components/Dishes-counter/useCount.js)
- `use`: Reads context values. Example: [LogInUser](./src/components/LogInUser/LogInUser.jsx)
- `usePathname`: Reads the current URL’s pathname. Example: [TabLink](./src/components/TabLink/TabLink.jsx)
- Custom Hooks: [useCount](./src/components/Dishes-counter/useCount.js) for adding/removing dishes from the cart

**Redux with Redux Toolkit**:
- Store: Manages global cart state
- cartSlice: Defines reducers (actions + logic) and selectors for adding/removing dishes
- `useSelector` Extracts data from the Redux store for use in components

**Additional Functionality**:
- `generateMetadata`: Dynamically generates restaurant titles for SEO
- **Theme Switcher**: Toggles between light and dark modes
- **ProgressBar** – Gives visual feedback during scroll
- **Fallbacks** – Custom pages for NotFound and RootError

**Developer Tools**:
- **ESLint** – Ensures clean, consistent code
- **Prettier** – Handles code formatting

---

Built as part of a React course project to explore modern React concepts using Next.js App Router and Redux Toolkit