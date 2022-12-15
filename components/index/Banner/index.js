import React from "react";
import Fade from "react-awesome-reveal";
import BannerWrapper, { ContentWrapper, ImageWrapper } from "./banner.style";
import Container from "../../common/UI/Container";
import { BANNER_DATA } from "../../../data";
import Heading from "../../common/Heading";
import NextImage from "../../common/NextImage";

const Banner = ({ setImg }) => {
    const {
        sectionImage,
        screenImage,
        screenImageDark,
        title,
        text,
        tagLine,
        buttons,
    } = BANNER_DATA;
    return (
        <BannerWrapper id="banner_section">
            <Container
                className={undefined}
                fullWidth={undefined}
                noGutter={undefined}
                mobileGutter={undefined}
                width={undefined}
            >
                <ContentWrapper>
                    <Fade>
                        <Heading
                            as="h2"
                            content={title}
                            className="section-title"
                        />
                        <p className="paragraph">{text}</p>
                    </Fade>
                </ContentWrapper>
                <ImageWrapper>
                    <Fade>
                        <NextImage
                            src={sectionImage}
                            alt={title}
                            className="image"
                            layout="intrinsic"
                        />
                    </Fade>
                </ImageWrapper>
            </Container>
        </BannerWrapper>
    );
};

export default Banner;
