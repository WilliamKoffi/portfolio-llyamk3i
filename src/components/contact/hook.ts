import { FormEvent, useState } from "react";
import { Draft } from "./draft";

export function useContact() {
  const [draft, setDraft] = useState<Draft.Model>(Draft.blank());
  const [flaws, setFlaws] = useState<Draft.Flaws>({});
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [notice, setNotice] = useState("");

  const input = (key: keyof Draft.Model, value: string) => {
    setDraft((previous) => ({ ...previous, [key]: value }));

    if (!flaws[key]) return;

    setFlaws((previous) => {
      const next = { ...previous };
      delete next[key];
      return next;
    });
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const issues = Draft.check(draft);
    if (Object.keys(issues).length > 0) {
      setFlaws(issues);
      return;
    }

    setBusy(true);
    setNotice("");
    setFlaws({});

    const success = await Draft.send(draft);

    setBusy(false);

    if (success) {
      setSent(true);
      setDraft(Draft.blank());
      return;
    }

    setNotice("Une erreur est survenue lors de l'envoi.");
  };

  const reset = () => {
    setSent(false);
    setNotice("");
  };

  return { draft, flaws, busy, sent, notice, input, submit, reset };
}
