import "./global.css"
import { App } from "../components/App/App.jsx"

export const metadata = {
  title: "Restaurants",
  description: "App for ordering at the restaurants"
}

export function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Kay+Pho+Du:wght@400;500;600;700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
        rel="stylesheet" />
    </head>
    <body>
    <App id="root">{ children }</App>
    </body>
    </html>
  )
}

export default RootLayout