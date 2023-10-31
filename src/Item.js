import React from 'react'
import './Item.css'

function Item() {
  return (
    <div className='mx-10'>
        <svg height='400px' width='500px'>
            <circle cx='100' cy='100' r='70' strokeWidth='10px' stroke='red ' fill='none'></circle>
        </svg>
    </div>
  )
}

export default Item