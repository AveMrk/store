import React from 'react';
export default function ShopCard(props) {
  const style = {
    backgroundImage: 'url('+ props.card.img + ')'
  }
  return (
    <div style={style} class='cards-list-item'>
      <h2>{props.card.name}</h2>
      <p>{props.card.color}</p>
      <div class='card-bottom'>
      <span>${props.card.price}</span>
      <button>add to cart</button>
      </div>
    </div>
  )
}
