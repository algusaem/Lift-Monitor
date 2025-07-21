"use client";

import Filters from "./Filters";
import { FiltersProvider } from "./useFilters";

const HistoryContent = ({ exercises, exercise_log }) => {
  return (
    <FiltersProvider>
      <Filters exercises={exercises} />
      {exercise_log.map((log) => {
        console.log(log);
      })}
    </FiltersProvider>
  );
};

export default HistoryContent;
