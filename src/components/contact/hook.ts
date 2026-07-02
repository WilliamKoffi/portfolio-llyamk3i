import { FormEvent, useState } from "react";
import { Draft } from "./draft";

export function useContact() {
  const [draft, setDraft] = useState<Draft.Model>(Draft.blank());
  const [flaws, setFlaws] = useState<Draft.Flaws>({});
  const [sent, setSent] = useState(false);

  const input = (key: keyof Draft.Model, value: string) => {
    setDraft((previous) => ({ ...previous, [key]: value }));

    if (!flaws[key]) return;

    setFlaws((previous) => {
      const next = { ...previous };
      delete next[key];
      return next;
    });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const issues = Draft.check(draft);
    if (Object.keys(issues).length > 0) {
      setFlaws(issues);
      return;
    }

    Draft.mail(draft);
    setSent(true);
    setFlaws({});
    setDraft(Draft.blank());
  };

  const reset = () => setSent(false);

  return { draft, flaws, sent, input, submit, reset };
}
