import styles from './Card.module.css';

export interface CardProps {
  imgUrl: string;
  title: string;
  description: string;
  ordinalNumber: number;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.image} src={props.imgUrl} alt={props.title} />
      </div>
      <div className={styles.text}>
        <div>
          <h2>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
        </div>
        <div className={styles.number}>
          <p className={styles.number}>{props.ordinalNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
