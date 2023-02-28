/** @format */

import styled from '@emotion/styled'
import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import FitbitRoundedIcon from '@mui/icons-material/FitbitRounded'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'flex',
  //   },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'none',
  //   },
}))

export default function Root() {
  const [avatarMenu, setAvatarMenu] = useState(false)
  const [openWelcoming, setOpenWelcoming] = useState(false)
  return (
    <div>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography
            onClick={(e) => setOpenWelcoming(true)}
            variant='h6'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            NABIL DEV
          </Typography>
          <Menu
            open={openWelcoming}
            onClose={(e) => setOpenWelcoming(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem>Hi</MenuItem>
          </Menu>
          {/* <FitbitRoundedIcon sx={{ display: { xs: 'block', sm: 'none' } }} /> */}
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>

          <NavLink to='/products'>
            <Typography variant='span'>Products</Typography>
          </NavLink>

          <Icons>
            <Avatar
              sx={{ width: 35, height: 35 }}
              src='https://avatars.githubusercontent.com/u/75049983?s=96&v=4'
              onClick={(e) => setAvatarMenu(true)}
            />
          </Icons>
          <UserBox onClick={(e) => setAvatarMenu(true)}>
            <Avatar
              sx={{ width: 35, height: 35 }}
              src='https://avatars.githubusercontent.com/u/75049983?s=96&v=4'
            />
            <Typography variant='span'>Nabil</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          open={avatarMenu}
          onClose={(e) => setAvatarMenu(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
