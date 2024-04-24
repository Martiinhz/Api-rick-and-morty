import React from 'react'

export const Card = ({img , name , gender}) => {
  return (
     <>
    <div>
        <img src={img} alt={name} />
    </div>
    <div>
        <p>{name}</p>
        <p>{gender}</p>
    </div>
    </>
  )
}
