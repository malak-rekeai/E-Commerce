import React from 'react'
import './breadcrum.css'
import arrow from '../../Assets/blackArrow.jpg'

const Breadcurm = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
  Home <img src={arrow} /> Shop <img src={arrow}  /> {product.category} <img src={arrow} /> {product.name}

    </div>
  )
}

export default Breadcurm