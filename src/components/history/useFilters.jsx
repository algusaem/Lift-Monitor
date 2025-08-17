import { createContext, useContext, useState } from "react";

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [selectExerc, setSelectExerc] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(new Date());

  return (
    <FiltersContext.Provider
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
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
