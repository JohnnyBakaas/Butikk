import CarCard, { CarCardProps } from "@/components/carCard/CarCard";

const cars: CarCardProps[] = [
  {
    img: "https://cdn.bmwblog.com/wp-content/uploads/BMW-3er-Cabrio-E93-Widebody-Prior-Design-04-1.jpg",
    title: "Snasen 3-serie",
    place: "Midt-Telemark",
    year: 2007,
    km: 150000,
    price: 90000,
  },
  {
    img: "https://cdn.bmwblog.com/wp-content/uploads/BMW-3er-Cabrio-E93-Widebody-Prior-Design-04-1.jpg",
    title: "Snasen 3-serie",
    place: "Midt-Telemark",
    year: 2007,
    km: 150000,
    price: 90000,
  },
  {
    img: "https://cdn.bmwblog.com/wp-content/uploads/BMW-3er-Cabrio-E93-Widebody-Prior-Design-04-1.jpg",
    title: "Snasen 3-serie",
    place: "Midt-Telemark",
    year: 2007,
    km: 150000,
    price: 90000,
  },
];

const Store = () => {
  return (
    <main>
      <h1>Hei</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cars.map((e, i) => (
          <CarCard
            img={e.img}
            title={e.title}
            place={e.place}
            year={e.year}
            km={e.km}
            price={e.price}
            key={i}
          />
        ))}
      </div>
    </main>
  );
};

export default Store;
