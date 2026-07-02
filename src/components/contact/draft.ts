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

  export async function send(draft: Model): Promise<boolean> {
    const payload = new FormData();
    const key = import.meta.env.VITE_WEB3FORMS_KEY ?? "";

    payload.append("access_key", key);
    payload.append("name", draft.name);
    payload.append("email", draft.email);
    payload.append("subject", "✨ ✨portfolio " + draft.subject);
    payload.append("message", draft.message);

    try {
      const request = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const data: unknown = await request.json();

      return (
        typeof data === "object" &&
        data !== null &&
        "success" in data &&
        data.success === true
      );
    } catch {
      return false;
    }
  }
}
