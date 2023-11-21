import React from 'react'

function PageTitle({ title, subText }) {
  return (
    <div className='container'>
      <div className='page-title'>
        <h1>{title}</h1>
        <p>{subText}</p>
      </div>
    </div>
  )
}

export default PageTitle