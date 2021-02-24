import { useEffect, useState } from "react"
import styled from "styled-components"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisible = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
  }, [])

  return (
    <>
      {isVisible && (
        <Container>
          <a className="icon" onClick={handleClick}>
            <i className="fas fa-chevron-up">SCROLL</i>
          </a>
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  bottom: 20px;
  align-items: center;
  height: 20px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
  color: black;
  background-color: black;

  &:hover {
    opacity: 1;
  }
`

export default ScrollToTop
