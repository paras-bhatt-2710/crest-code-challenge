import React, { useState } from 'react'
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


function PhotoGallery({ images }) {

  const [index, setIndex] = useState(-1);

  return (
    <>
    
      <div className='container'>
        <div className='gallery-wrapper'>
          {
            images.map((item, index) => (
              <div key={index} className='gallery-wrap' onClick={() => setIndex(index)}>
                <img src={item.src} alt='' />
              </div>
            ))
          }
        </div>
      </div>

      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  )
}

export default PhotoGallery