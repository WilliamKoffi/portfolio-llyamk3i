import { useState } from "react";

export function useProcess() {
  const [tab, setTab] = useState<"jobs" | "studies">("jobs");

  const pick = (choice: "jobs" | "studies") => {
    setTab(choice);
  };

  return { tab, pick };
}
