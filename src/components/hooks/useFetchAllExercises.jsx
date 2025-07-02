import getAllExercises from "@/lib/api/exercises/getAllExercises";
import { useEffect, useState } from "react";

const useFetchAllExercises = () => {
  const [exercises, setExercises] = useState(false);

  useEffect(() => {
    const fetchAllExercises = async () => {
      const response = await getAllExercises();
      setExercises(response);
    };
    fetchAllExercises();
  }, []);

  return { exercises };
};

export default useFetchAllExercises;
