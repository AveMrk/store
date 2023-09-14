import ShopItem from "./shopItem";
export default function ListView(props) {
  return <div class='items-list'>
    {props.items.map((item) => (
      <ShopItem item={item}/>
    ))}
    </div>;
}