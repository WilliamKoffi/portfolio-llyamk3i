import { useMemo, useState } from "react";
import { Catalog } from "./domain";

export function useExpertise() {
  const [filter, setFilter] = useState("all");

  const subset = useMemo(() => {
    return Catalog.filter(filter);
  }, [filter]);

  return { filter, setFilter, subset };
}
