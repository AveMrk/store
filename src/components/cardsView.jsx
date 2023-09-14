import ShopCard from "./shopCard";
export default function CardsView(props) {
  return (<div class='cards-list'>
  {props.cards.map((item) => (
      <ShopCard card={item}/>
    ))}
  </div>
  )
}