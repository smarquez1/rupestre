import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"

const NavItem = ({ href, isScrolled, isActive }) => {
  return (
    <li>
      <Link href={href}>
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
              { "text-yellow": isActive },
            )}
          >
            Rupestre
          </span>
        </a>
      </Link>
    </li>
  )
}

export default NavItem
