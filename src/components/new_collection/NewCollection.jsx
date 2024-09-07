import React from 'react'
import './newCollection.css'
import new_collections from '../../Assets/new_collections'
import Item from '../item/Item'

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>New collection</h1>
        <hr/>
        <div className='collections'>
            {new_collections.map((collection , i)=>{
           return <Item key={i} id={collection.id} name={collection.name} image={collection.image} new_price={collection.new_price} old_price={collection.old_price} />
            })}

        </div>
    </div>
  )
}

export default NewCollection