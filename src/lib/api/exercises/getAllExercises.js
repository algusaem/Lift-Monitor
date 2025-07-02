const getAllExercises = async () => {
  const response = await fetch(`/api/exercises/getAll`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch exercises");
  }
  return data;
};

export default getAllExercises;
