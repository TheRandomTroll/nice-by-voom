import React from 'react'
import Fade from 'react-awesome-reveal'
import Container from '../../common/UI/Container'
import Text from '../../common/Text'
import Heading from '../../common/Heading'
import Image from '../../common/Image'
import Box from '../../common/Box'
import QualityFeaturesWrapper, { PostsWrapper } from './qualityFeatures.style'
import { QUALITY_FEATURES_DATA } from '../../../data'
const QualityFeatures = () => {
  const { title, posts } = QUALITY_FEATURES_DATA
  return (
    <QualityFeaturesWrapper id='features'>
      <Container>
        <Heading as='h2' content={title} className='section-title' />
        <PostsWrapper>
          {posts.map((post, index) => (
            <Box className='post' key={`quality-features-key-${index}`}>
              <Fade direction={"bottom"} cascade>
                <Image
                  src={post?.icon?.src}
                  alt={post?.title}
                  className='post-icon'
                />
                <Heading as='h3' content={post?.title} className='post-title' />
                <Text
                  as='p'
                  content={post?.text}
                  className='post-description'
                />
              </Fade>
            </Box>
          ))}
        </PostsWrapper>
      </Container>
    </QualityFeaturesWrapper>
  )
}

export default QualityFeatures
