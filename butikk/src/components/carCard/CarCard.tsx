import styles from "./CarCard.module.css";

export type CarCardProps = {
  img: string;
  title: string;
  place: string;
  year: number;
  km: number;
  price: number;
};

const CarCard = ({ img, title, place, year, km, price }: CarCardProps) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={img} alt={img} />
      <h2>{title}</h2>
      <p>{place}</p>
      <div className={styles["number-wrapper"]}>
        <p>{year}</p>
        <p>{formatNumber(km)} km</p>
        <p>{formatNumber(price)} kr</p>
      </div>
    </div>
  );
};

const formatNumber = (num: number): string => {
  // Convert the number to a string
  let numStr = num.toString();

  // Reverse the string to start grouping from the end
  let reversedStr = numStr.split("").reverse().join("");

  // Group digits into sections of three
  let matchResult = reversedStr.match(/.{1,3}/g);

  if (matchResult === null) {
    // If no matches are found, return the original number string
    return numStr;
  }

  let groupedStr = matchResult.join(" ");

  // Reverse the string back and return
  return groupedStr.split("").reverse().join("");
};

export default CarCard;
