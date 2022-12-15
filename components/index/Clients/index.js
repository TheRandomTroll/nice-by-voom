import React from 'react'
import Container from '../../common/UI/Container'
import Heading from '../../common/Heading'
import NextImage from '../../common/NextImage'
import Box from '../../common/Box'
import Logo from '../../common/UIElements/Logo'
import ClientsWrapper, { ImageSlide, ImageSlider } from './clients.style'
import { CLIENTS_DATA } from '../../../data'
import Text from '../../common/Text'
const Clients = () => {
  const { title, clients } = CLIENTS_DATA
  return (
    <ClientsWrapper>
      <Container>
        <Heading as='h2' content={title} className='section-title' />
        <ImageSlider>
          <ImageSlide>
            {clients.map((item) => (
              <Logo
                key={`slide1__key${item.id}`}
                href={item.link}
                logoSrc={item.logo}
                title={item.name}
              />
            ))}
          </ImageSlide>
          <ImageSlide>
            {clients.map((item) => (
              <Logo
                key={`slide2__key${item.id}`}
                href={item.link}
                logoSrc={item.logo}
                title={item.name}
              />
            ))}
          </ImageSlide>
        </ImageSlider>
      </Container>
    </ClientsWrapper>
  )
}

export default Clients
