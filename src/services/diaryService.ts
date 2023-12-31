import diaries from "../../data/entries";
import { NewDiaryEntry, NonSensitiveDiaryEntry, DiaryEntry } from "../types";
import toNewDiaryEntry from "../utils";

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

// returns all diary entries without the comment field
const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  //return diaries; // this is wrong because it returns the comment field even though it's not recogonized by typescript
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...entry,
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById,
};
