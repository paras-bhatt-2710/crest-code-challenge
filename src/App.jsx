import { useState } from 'react';
import './App.css'
import data from './data/data.json'
import PhotoGallery from './components/PhotoGallery';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import PageTitle from './components/PageTitle';
import GalleryFilters from './components/GalleryFilters';

function App() {

  const [images, setImages] = useState(data);

  return (
    <>
      <PageTitle title='Photo Gallery' subText='Lorem ipsum is just a dummy text.' />
      <GalleryFilters data={data} setImages={setImages} />
      <PhotoGallery images={images} />
    </>
  )
}

export default App
