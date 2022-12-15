import React, { useEffect, useRef, useState } from 'react'
import { BANNER_DATA } from '../../../data'
import ScrollableStickyWrapper, {
  MockupImageWrapper,
  ScreenImageWrapper,
  Mockup
} from './scrollableSticky.style'
// import { Fade } from 'react-reveal'
import Image from '../../common/Image'

const ScrollableSticky = ({ children }) => {
  const { screenImage, title } = BANNER_DATA
  const [img, setImg] = useState(screenImage)

  const prevImgRef = useRef()

  useEffect(() => {
    prevImgRef.current = img
  }, [img])

  return (
    <ScrollableStickyWrapper>
      <MockupImageWrapper>
        <Mockup>
          <ScreenImageWrapper>
            <Image
              src={img.src}
              alt={title}
              className={
                prevImgRef.current !== img ? 'screen-image-animation' : ''
              }
            />
          </ScreenImageWrapper>
        </Mockup>
      </MockupImageWrapper>

      {React.Children.map(children, (child) =>
        React.cloneElement(child, { setImg: setImg })
      )}
    </ScrollableStickyWrapper>
  )
}

export default ScrollableSticky
