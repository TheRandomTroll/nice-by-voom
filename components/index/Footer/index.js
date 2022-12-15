import React from 'react'
import Link from 'next/link'
import Container from '../../common/UI/Container'
import Text from '../../common/Text'
import Image from '../../common/Image'
import Box from '../../common/Box'
import Logo from '../../common/UIElements/Logo'
import FooterWrapper from './footer.style'

import LogoImage from '../../../public/logo.png'
import facebookIcon from '../../../public/footer-fb.svg'
import twitterIcon from '../../../public/footer-twitter.svg'
import dribbleIcon from '../../../public/footer-dribbble.svg'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container fullWidth={true}>
        <Container>
          <Box className='leftText'>
            <Logo
              href='#'
              className='logo'
              logoSrc={LogoImage}
              title='FoodDelivery'
            />
            <Box className='footerText'>
              <Text
                as='span'
                content={`Copyright © ${new Date().getFullYear()}`}
              />{' '}
              <Link href='#'>
                RedQ, Inc.
              </Link>
            </Box>
          </Box>
          <Box className='footerMenu'>
            <Link href='#'>
              Support
            </Link>
            <Link href='#'>
              About Us
            </Link>
            <Link href='#'>
              Privacy
            </Link>
            <Link href='#'>
              Contact
            </Link>
          </Box>
          <Box className='socialLinks'>
            <Text as='span' content='Social:' />
            <Link href='#'>
              
                <Image src={facebookIcon?.src} alt='facebook' />
              
            </Link>
            <Link href='#'>
              
                <Image src={twitterIcon?.src} alt='twitter' />
              
            </Link>
            <Link href='#'>
              
                <Image src={dribbleIcon?.src} alt='dribbble' />
              
            </Link>
          </Box>
        </Container>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
