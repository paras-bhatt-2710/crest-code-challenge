import React, { useState } from 'react'

function GalleryFilters({ data, setImages }) {

  const [activeBtn, setActiveBtn] = useState('all');

  const handleFilter = (filter) => {
    if (filter !== 'all') {
      const tempData = data.filter(item => item.category === filter)
      setImages(tempData);
      setActiveBtn(filter);
    }
    else {
      setImages(data);
      setActiveBtn('all');
    }
  }

  return (
    <div className='container'>
      <div className='filter-wrapper'>
        <ul>
          <li><button className={activeBtn === 'all' ? 'active' : ''} onClick={() => handleFilter('all')}>All</button></li>
          <li><button className={activeBtn === 'branding' ? 'active' : ''} onClick={() => handleFilter('branding')}>Branding</button></li>
          <li><button className={activeBtn === 'design' ? 'active' : ''} onClick={() => handleFilter('design')}>Design</button></li>
          <li><button className={activeBtn === 'development' ? 'active' : ''} onClick={() => handleFilter('development')}>Development</button></li>
        </ul>
      </div>
    </div>
  )
}

export default GalleryFilters