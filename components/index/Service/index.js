import Box from "../../common/Box";
import Heading from "../../common/Heading";
import Image from "../../common/Image"
import Text from "../../common/Text";
import Container from "../../common/UI/Container";
import { SERVICE_DATA } from "../../../data";
import { React, useState } from "react";
import Fade from 'react-awesome-reveal'
import ServiceWrapper, {
  ContentWrapper,
  ServiceItemsWrapper,
  ImageWrapper,
  ButtonGroup,
} from "./service.style";

const {
  title,
  text,
  sectionImage,
  screenImage,
  serviceItemsNicotine,
  serviceItemsNonNicotine,
} = SERVICE_DATA;

function Service({ setImg, setTheme }) {
  const [state, setState] = useState({
    active: 'nicotine',
  });

  const handleNicotineChange = (plan) => {
    if (plan === 'nicotine') {
      setState({
        ...state,
        active: 'nicotine'
      });
      setTheme("dark")
    } else {
      setState({
        ...state,
        active: 'nonnicotine'
      });
      setTheme("light")
    }
  }
  
  let content = state.active === 'nicotine' ? serviceItemsNicotine : serviceItemsNonNicotine;
  return (
    <ServiceWrapper id="service_section">
      <Container>
        <ContentWrapper>
          <Fade direction="left">
            <Heading as="h2" content={title} className="section-title" />
            <Text as="p" content={text} className="paragraph" />

            <ButtonGroup>
              <button
                className={state.active === "nicotine" ? "active" : ""}
                type="button"
                onClick={() => handleNicotineChange("nicotine")}
              >
                Никотинови
              </button>
              <button
                className={state.active === "nonnicotine" ? "active" : ""}
                type="button"
                onClick={() => handleNicotineChange("nonnicotine")}
              >
                Безникотинови
              </button>
            </ButtonGroup>
            <ServiceItemsWrapper>
              {
              content.map((item, index) => (
                <Box
                  className="service-item"
                  key={`quality-features-key-${index}`}
                >
                  <Box className="service-item-icon-holder">
                    <Image
                      src={item?.icon?.src}
                      alt={item?.title}
                      className="service-item-icon"
                    />
                  </Box>
                  <Text
                    as="p"
                    className="service-item-title"
                    content={item?.title}
                  />
                </Box>
              ))}
            </ServiceItemsWrapper>
          </Fade>
        </ContentWrapper>
        <ImageWrapper>
          <Fade direction={"right"}>
            <Image src={sectionImage?.src} alt="" className="image" />
          </Fade>
        </ImageWrapper>
      </Container>
    </ServiceWrapper>
  );
}

export default Service;
