import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { withRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"

import ScrollToTop from "components/common/ScrollToTop"

export const NavBrand = () => {
  return (
    <Link href="/">
      <a className="nav-link">
        <Image
          src="/images/brand.svg"
          alt="rupestre-symbol"
          height={100}
          width={200}
        />
      </a>
    </Link>
  )
}

export const NavLink = (props) => {
  //   "is-active": props.pathname
  let className = classNames(`navbar-item is-uppercase`)

  return (
    <Link href={props.path}>
      <a className={className}> {props.label} </a>
    </Link>
  )
}

const NavBar = ({ router: { pathname } }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuActive, setisMenuActive] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  const handleScroll = () => {
    window.pageYOffset > "500" ? setIsScrolled(true) : setIsScrolled(false)
  }

  const navBarClass = classNames(`navbar is-fixed-top`, {
    "is-dark is-transparent": !isScrolled,
    "is-white": isScrolled,
  })

  return (
    <NavBarContainer
      className={navBarClass}
      role="navigation"
      aria-label="main navigation"
    >
      <ScrollToTop />
      <div className="navbar-brand">
        <NavBrand />
        <a
          onClick={() => {
            setisMenuActive(!isMenuActive)
          }}
          role="button"
          className={`navbar-burger burger ${isMenuActive ? "is-active" : ""}`}
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navMenu"
        className={`navbar-menu ${isMenuActive && "is-active"}`}
      >
        <div className="navbar-start">
          <NavLink path="/story" label="Historia" pathname />
          <NavLink path="/about" label="Quien soy" pathname />
          <NavLink path="/contact" label="Contacto" pathname />
        </div>

        {/* TODO: Add when we have translations */}
        {/* <div className="navbar-end"> */}
        {/*   <div className="navbar-item has-dropdown is-hoverable"> */}
        {/*     <a className="navbar-link"> ARG </a> */}

        {/*     <div className="navbar-dropdown"> */}
        {/*       <a className="navbar-item"> Portugues </a> */}
        {/*       <a className="navbar-item"> Ingles </a> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </NavBarContainer>
  )
}

const NavBarContainer = styled.nav`
  &.is-transparent {
    background-color: transparent;
    // TODO: not working
    .navbar-item:hover {
      background-color: white;
    }
  }
`

export default withRouter(NavBar)
