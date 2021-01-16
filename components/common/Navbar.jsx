import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  const handleScroll = () => {
    window.pageYOffset > 500 ? setIsScrolled(true) : setIsScrolled(false)
  }

  return (
    <div
      className={classNames(`fixed w-full py-4 transition all duration-700`, {
        "bg-white": isScrolled,
      })}
    >
      <div className="`flex grid items-center`">
        <Link href="/">
          <a
            aria-label="Rupestre"
            title="Rupestre"
            className="inline-flex items-center lg:mx-auto"
          >
            {/* TODO: This should be an svg image, so it can change colors on scroll */}
            <Image
              src="/rupestre-symbol.png"
              alt="rupestre-symbol"
              height={24}
              width={24}
            />
            <span
              className={classNames(
                `ml-2 text-xl font-bold tracking-wide uppercase`,
                { "text-black": isScrolled },
              )}
            >
              Rupestre
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
