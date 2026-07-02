import { DEV_INFO } from "../../data";

export namespace Draft {
  export type Model = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  export type Flaws = Partial<Record<keyof Model, string>>;

  export function blank(): Model {
    return { name: "", email: "", subject: "", message: "" };
  }

  export function check(draft: Model): Flaws {
    const flaws: Flaws = {};

    if (!draft.name.trim()) flaws.name = "Le nom est requis.";

    if (!draft.email.trim()) {
      flaws.email = "L'adresse e-mail est requise.";
    } else if (!/\S+@\S+\.\S+/.test(draft.email)) {
      flaws.email = "L'adresse e-mail est invalide.";
    }

    if (!draft.subject.trim()) flaws.subject = "Le sujet est requis.";
    if (!draft.message.trim()) flaws.message = "Le message est requis.";

    return flaws;
  }

  export function mail(draft: Model): void {
    const body = [
      `Nom: ${draft.name}`,
      `Email: ${draft.email}`,
      "",
      draft.message,
    ].join("\n");

    const link =
      `mailto:${DEV_INFO.email}?subject=${encodeURIComponent(draft.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = link;
  }
}
