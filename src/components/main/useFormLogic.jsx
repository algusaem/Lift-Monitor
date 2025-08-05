import { logExercise } from "@/app/actions/postExerciseLog";
import { useState } from "react";
import { notifyError, notifySuccess } from "../notifications/notify";

const useFormLogic = () => {
  const [selectExerc, setSelectExerc] = useState(null); // Exercise selector state
  const [selectDate, setSelectDate] = useState(new Date()); // Date state
  const [sets, setSets] = useState([{ weight: "", reps: "" }]); // Reps state
  const [quality, setQuality] = useState(undefined); // Quality state
  const [notes, setNotes] = useState(""); // Notes state

  const handleAddSet = () => {
    setSets((prev) => {
      const lastWeight = prev.length > 0 ? prev[prev.length - 1].weight : "";
      return [...prev, { weight: lastWeight, reps: "" }];
    });
  };

  const handleDeleteSet = (index) => {
    setSets((prev) => prev.filter((_, i) => i !== index));
  };

  const updateSet = (index, field, value) => {
    setSets((prev) =>
      prev.map((set, i) => (i === index ? { ...set, [field]: value } : set))
    );
  };

  const onSubmit = async () => {
    if (!selectExerc || !selectDate || sets.length === 0) {
      notifyError("Error", "Missing required fields");
      return;
    }

    try {
      await logExercise({
        exercise_id: selectExerc,
        date: selectDate,
        form_quality:
          typeof quality === "number" && quality >= 1 && quality <= 5
            ? quality
            : 3,
        notes,
        sets: sets.map((s) => ({
          reps: Number(s.reps),
          weight: Number(s.weight),
        })),
      });
      notifySuccess("Success", "Exercise log saved!");
      resetForm();
    } catch (err) {
      console.error(err);
      notifyError("Error", "Failed to save log.");
    }
  };

  const resetForm = () => {
    setSelectExerc(null);
    setSelectDate(new Date());
    setSets([{ weight: "", reps: "" }]);
    setQuality(undefined);
    setNotes("");
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
