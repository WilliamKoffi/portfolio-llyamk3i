import { useMemo, useState } from "react";
import { Showcase } from "./domain";

export function usePortfolio() {
  const [category, setCategory] = useState("Tous");

  const subset = useMemo(() => {
    return Showcase.filter(category);
  }, [category]);

  const pick = (choice: string) => {
    setCategory(choice);
  };

  return { category, pick, subset };
}
