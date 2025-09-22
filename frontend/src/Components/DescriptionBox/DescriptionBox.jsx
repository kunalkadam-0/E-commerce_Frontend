import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce websiteis an online platform that facilites hat buying and selling of products or services over the internet.
            </p>
            <p>
                E-commerce website typically display prodcts or services along with detailed description.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox