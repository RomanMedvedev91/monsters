import { Monster } from "../App";
import "./card-list.styles.css";
import { Card } from "./card/card.component";

type CardListProps = {
  monsters: Monster[];
};

export const CartList = ({ monsters }: CardListProps) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
