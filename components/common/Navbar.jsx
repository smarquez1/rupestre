import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { withRouter } from 'next/router'
import classNames from "classnames"

export const NavBrand = () => {
  return(
    <Link href="/">
      <a className="nav-link">
        <Image
          src="/rupestre-symbol.png"
          alt="rupestre-symbol"
          height={24}
          width={24}
        />
      </a>
    </Link>
  )
}

export const NavLink = (props) => {
  //   "is-active": props.pathname
  let className = classNames(
    `navbar-item is-uppercase`,
    { "text-black": !props.isScrolled },
  )

  return(
    <Link href={props.path}><a className={className}> {props.label} </a></Link>
  )
}

const NavBar = ({ router: { pathname } }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  const handleScroll = () => {
    window.pageYOffset > 500 ? setIsScrolled(true) : setIsScrolled(false)
  }

  const navClass = classNames(`navbar is-transparent is-fixed-top`, {
    "is-white": isScrolled,
  })

  return (
    <nav className={navClass} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavBrand />

        <a role="button" className="navbar-burger" aria-label="menu"
          aria-expanded="false" data-target="navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <NavLink path="/story" label="Historia" pathname/>
          <NavLink path="/about" label="Quien soy" pathname/>
          <NavLink path="/contact" label="Contacto" pathname/>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link"> ARG </a>
              <div className="navbar-dropdown">
                <a className="navbar-item"> Portugues </a>
                <a className="navbar-item"> Ingles </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)
