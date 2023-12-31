import { useState } from "react";
import CardsView from "./cardsView";
import ListView from "./listView";
import IconSwitch from "./iconSwitch";
export default function Store() {
  const [iconType, setIconType] = useState("view_list");
  const iconTypes = ["view_list", "view_module"];
  const handleClick = () => {
    iconTypes.map((item) => {
      if (item === iconType) {
        let typeIndex = +(!iconTypes.indexOf(iconType));
        setIconType(iconTypes[typeIndex]);
      }
    });
  };
  const products = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }
  ];
  return (
    <div>
      <IconSwitch icon={iconType} onSwitch={handleClick} />
      {iconType==="view_list"?
      <ListView items={products} />:
      <CardsView cards={products} />
      }
    </div>
  );
}