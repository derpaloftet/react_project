import { useEffect, useState } from "react"

function handleScroll(setScrollProgress) {
  const overallScrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const currentScrollHeight = window.scrollY
  const currentScrollProgress = currentScrollHeight / overallScrollHeight * 100
  setScrollProgress(currentScrollProgress)
}

export function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  useEffect(() => {
    const scrollListener = () => {
      handleScroll(setScrollProgress)
    }
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  }, [])

  const progressContainer = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "15px",
    backgroundColor: "lightblue",
    width: `${ scrollProgress }%`
  }
  return (
    <div style={ progressContainer }></div>
  )
}