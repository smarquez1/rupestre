import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { withRouter } from 'next/router'
import classNames from "classnames"

export const NavBrand = (props) => {
  return(
    <Link href="/">
      <a className="nav-link">
        <Image
          src="/rupestre-symbol.png"
          alt="rupestre-symbol"
          height={24}
          width={24}
        />
        <span class="font-semibold text-xl uppercase">Rupestre</span>
      </a>
    </Link>
  )
}

export const NavLink = (props) => {
  //   "is-active": props.pathname
  let className = classNames(
    `block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200  mr-4 uppercase`,
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

  const navClass = classNames(`flex items-center justify-between flex-wrap p-6 fixed w-full py-4 transition all duration-700`, {
    "bg-white": isScrolled,
  })

  return (
    <nav class={navClass}>
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <NavBrand/>
      </div>
      {/* responsive menu */}
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      {/* responsive menu */}
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <NavLink path="/story" label="Historia" pathname/>
          <NavLink path="/about" label="Quien soy" pathname/>
          <NavLink path="/contact" label="Contacto" pathname/>
        </div>
        <div>
          <a href="#" class="inline-block text-white hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            ARG
          </a>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)
