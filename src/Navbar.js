import React, { useEffect, useState } from 'react'

import './Navbar.css'

function Navbar() {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })

    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`navbar ${show && 'navBackground'}`}>
      <img
        className="navbar-netflixLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix Logo"
      />
      <img
        className="navbar-avatarLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </div>
  )
}

export default Navbar
