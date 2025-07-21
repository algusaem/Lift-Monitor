import { createContext, useContext, useState } from "react";

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [selectExerc, setSelectExerc] = useState(null); // Exercise selector state
  const [startDate, setStartDate] = useState(null); // Start date state
  const [endDate, setEndDate] = useState(new Date()); // End date state

  return (
    <FiltersContext
      value={{
        selectExerc,
        setSelectExerc,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </FiltersContext>
  );
};

export const useFilters = () => useContext(FiltersContext);
