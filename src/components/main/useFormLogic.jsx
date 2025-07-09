import { useState } from "react";

const useFormLogic = () => {
  const [selectExerc, setSelectExerc] = useState(null); // Exercise selector state
  const [selectDate, setSelectDate] = useState(null); // Date state
  const [sets, setSets] = useState([{ weight: "", reps: "" }]); // Reps state
  const [quality, setQuality] = useState(undefined); // Quality state
  const [notes, setNotes] = useState(""); // Notes state

  const handleAddSet = () => {
    setSets((prev) => [...prev, { weight: "", reps: "" }]);
  };

  const handleDeleteSet = (index) => {
    setSets((prev) => prev.filter((_, i) => i !== index));
  };

  const updateSet = (index, field, value) => {
    setSets((prev) =>
      prev.map((set, i) => (i === index ? { ...set, [field]: value } : set))
    );
  };

  const onSubmit = () => {
    alert([selectExerc, selectDate, sets, quality, notes]);
  };

  return {
    selectExerc,
    setSelectExerc,
    selectDate,
    setSelectDate,
    sets,
    setSets,
    quality,
    setQuality,
    notes,
    setNotes,
    handleAddSet,
    handleDeleteSet,
    updateSet,
    onSubmit,
  };
};

export default useFormLogic;
