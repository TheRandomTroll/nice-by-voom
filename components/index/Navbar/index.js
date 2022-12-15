import React, { useContext } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import NavbarWrapper from '../../common/Navbar'
import Drawer from '../../common/Drawer'
import Button from '../../common/Button'
import Logo from '../../common/UIElements/Logo'
import Box from '../../common/Box'
import HamburgMenu from '../../common/HamburgMenu'
import Container from '../../common/UI/Container'
import { DrawerContext } from '../../../contexts/DrawerContext'

import { MENU_ITEMS } from '../../../data'
import ScrollSpyMenu from '../../common/ScrollSpyMenu'

import LogoImage from '../../../public/logo.png'
import LogoLightImage from '../../../public/logo-light.png'
import { useTheme } from 'styled-components'

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const theme = useTheme();
  const { state, dispatch } = useContext(DrawerContext)
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    })
  }

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo
            href='#'
            logoSrc={theme.name === 'white' ? LogoLightImage : LogoImage}
            title='Agency'
            logoStyle={logoStyle}
            className='main-logo'
          />
          <Box {...menuWrapper} className='mainMenuWrapper'>
            <ScrollSpyMenu
              className='main_menu'
              menuItems={MENU_ITEMS}
              offset={-70}
            />
            <Drawer
              width='420px'
              placement='right'
              drawerHandler={<HamburgMenu barColor='#ff5f6d' />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className='mobile_menu'
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  )
}

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
}

Navbar.defaultProps = {
  navbarStyle: {
    className: 'navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['126px', '126px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`,
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
}

export default Navbar