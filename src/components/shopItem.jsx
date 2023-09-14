import React from 'react'

export default function ShopItem(props) {
  return (
    <div class='items-list-item'>
      <img src={props.item.img} alt={props.item.name}/>
      <h2>{props.item.name}</h2>
      <p>{props.item.color}</p>
      <span>${props.item.price}</span>
      <button>add to cart</button>
    </div>
  )
}
