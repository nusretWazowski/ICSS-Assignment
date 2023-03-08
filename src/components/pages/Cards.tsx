import Card, { CardProps } from '../cards/Card';

import styles from './Cards.module.css';

interface CardsProps {
  cardItems: Array<Omit<CardProps, 'ordinalNumber'>>;
}

const Cards: React.FC<CardsProps> = (props) => {
  return (
    <div className={styles.container}>
      {props.cardItems.map((card, index) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          imgUrl={card.imgUrl}
          ordinalNumber={index + 1}
        />
      ))}
    </div>
  );
};

export default Cards;
