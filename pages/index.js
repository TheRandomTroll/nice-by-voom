import Head from "next/head";
import { Fragment, useState } from "react";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import useDarkMode from "../hooks/useDarkMode";
import blackTheme from "../styles/themes/blackTheme";
import whiteTheme from "../styles/themes/whiteTheme";
import ResetCSS from "../styles/resetStyle";
import GlobalStyle, { ContentWrapper } from "../styles/style";
import Navbar from "../components/index/Navbar";
import { DrawerProvider } from "../contexts/DrawerContext";
import ScrollableSticky from "../components/index/ScrollableSticky";
import Banner from "../components/index/Banner";
import Service from "../components/index/Service";
import QualityFeatures from "../components/index/QualityFeatures";
import Clients from "../components/index/Clients";
import Testimonials from "../components/index/Testimonials";
import Footer from "../components/index/Footer";

export default function Home() {
    const [theme, themeSetter] = useDarkMode();
    const [img, setImg] = useState();

    const themeMode = theme === "light" ? whiteTheme : blackTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <Fragment>
                <Head>
                    <title>NICEbyVOOM</title>
                    <meta
                        name="Description"
                        content="React next landing page"
                    />
                    <meta name="theme-color" content="#fff2d9" />
                </Head>
                <ResetCSS />
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <ScrollableSticky>
                        <Banner setImg={undefined} />
                        <Service setTheme={themeSetter} setImg={undefined} />
                    </ScrollableSticky>
                    <QualityFeatures />
                    <Clients />
                    <Testimonials />
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
}
