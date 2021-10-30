import { useEffect, useState } from "react";

const useTour = () => {
  const [tour, setTour] = useState([]);
  console.log(tour);
  useEffect(() => {
    fetch("http://localhost:5000/tour")
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);
  return { tour, setTour };
};
export default useTour;
