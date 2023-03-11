import React from "react"
import Link from "next/link"

function Nav() {
  return (
    <ul className="nav-list">
      <li className="nav-list-item" />
      <li className="nav-list-item">
        <Link className="nav-link" href="/#releases">
          releases
        </Link>
      </li>
      <li className="nav-list-item">
        <Link className="nav-link" href="/#merch">
          merch
        </Link>
      </li>
      <li className="nav-list-item">
        <Link className="nav-link" href="/#about">
          about
        </Link>
      </li>
      <li className="nav-list-item">
        <Link className="nav-link" href="/#contact">
          contact
        </Link>
      </li>
      <li className="nav-list-item" />
    </ul>
  )
}

export default Nav
