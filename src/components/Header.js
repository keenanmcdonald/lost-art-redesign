'use client'
import { useState } from 'react'
import { AppBar, Toolbar, Box, Button, Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import Link from 'next/link'
import Image from 'next/image'
import logo from '@media/logo-mic.png'

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <Image
            src={logo}
            width={200}
            height={100}
            alt="Lost Art Records logo with microphone"
          />
        </Link>
        <Box compoent="nav" sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NavItem text="Home" href="/" />
          <NavItem text="Releases" href="/releases" />
          <NavItem text="Artists" href="/artists" />
          <NavItem text="About" href="/about" />
          <NavItem text="Archive" href="/archive" />
        </Box>
        <IconButton
          aria-label="open menu"
          onClick={() => setMobileNavOpen((prev) => !prev)}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Link href="/cart">
          <ShoppingCartIcon />
        </Link>
      </Toolbar>
      <Drawer compoent="nav" open={mobileNavOpen}>
        <NavItem text="Home" href="/" />
        <NavItem text="Releases" href="/releases" />
        <NavItem text="Artists" href="/artists" />
        <NavItem text="About" href="/about" />
        <NavItem text="Archive" href="/archive" />
      </Drawer>
    </AppBar>
  )
}

function NavItem({ text, href }) {
  return (
    <Link href={href}>
      <Button component="div" sx={{ color: 'black' }}>
        {text}
      </Button>
    </Link>
  )
}
