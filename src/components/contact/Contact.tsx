import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, Mail, MapPin, Phone, Send, type LucideIcon } from "lucide-react";
import contactFreelanceCode from "../../../assets/contact-freelance-code.png";
import { DEV_INFO } from "../../data";
import { Draft } from "./draft";
import { Done } from "./done";
import { Field } from "./field";
import { useContact } from "./hook";

const info: Array<{ icon: LucideIcon; tag: string; text: string; href?: string }> = [
  { icon: Mail, tag: "EMAIL", text: DEV_INFO.email, href: `mailto:${DEV_INFO.email}` },
  { icon: Phone, tag: "TÉLÉPHONE", text: DEV_INFO.phone },
  { icon: MapPin, tag: "LOCALISATION", text: DEV_INFO.address },
];

const fields: Array<{
  name: keyof Draft.Model;
  id: string;
  tag: string;
  hint: string;
  kind?: "email" | "text";
  rows?: number;
}> = [
  { name: "name", id: "contact-name", tag: "Votre nom complet", hint: "Jean Dupont" },
  { name: "email", id: "contact-email", tag: "Adresse e-mail", hint: "jean.dupont@entreprise.com", kind: "email" },
  { name: "subject", id: "contact-subject", tag: "Sujet du message", hint: "Création d'une application e-commerce" },
  {
    name: "message",
    id: "contact-message",
    tag: "Votre message",
    hint: "Bonjour William, nous aimerions développer une plateforme sur-mesure...",
    rows: 5,
  },
];

export default function Contact() {
  const { draft, flaws, busy, sent, notice, input, submit, reset } = useContact();

  return (
    <section className="relative overflow-hidden bg-brand-bg py-24">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-brand-accent/5 blur-3xl" />
      <div id="contact" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent md:justify-start">
            <Mail size={14} />
            <span>CONTACT</span>
          </div>
          <h2 className="font-serif text-4xl font-light italic leading-tight text-brand-dark sm:text-5xl">
            Donnons vie à votre projet
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-20 bg-brand-accent md:mx-0" />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          <div className="flex lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex min-h-[560px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-brand-dark bg-cover bg-center p-8 shadow-xl sm:min-h-[640px] sm:p-10 lg:h-full"
              id="contact-product-image"
              style={{ backgroundImage: "url(" + contactFreelanceCode + ")" }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/35 to-brand-dark/90" />

              <div className="relative z-10 flex flex-col gap-4 text-white">
                <h3 className="font-sans text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
                  Vous avez une idée de produit ? Travaillons ensemble.
                </h3>
                <p className="text-xs font-medium leading-relaxed text-white/85 sm:text-sm">
                  Que vous ayez besoin d'une application mobile haute performance, d'un site web corporate élégant, ou d'une refonte complète de votre expérience utilisateur, je suis là pour vous accompagner.
                </p>
              </div>

              <div className="relative z-10 mt-12 flex flex-col gap-6">
                <div id="contact-info-list" className="flex flex-col gap-4">
                  {info.map(({ icon: Icon, tag, text, href }) => (
                    <div key={tag} className="flex items-center gap-4">
                      <div className="shrink-0 rounded-xl border border-white/15 bg-white/15 p-3 text-white shadow-xs backdrop-blur-md">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono uppercase tracking-wider text-white/55">{tag}</span>
                        {href ? (
                          <a href={href} className="text-xs font-semibold text-white transition-colors hover:text-brand-accent-light sm:text-sm">
                            {text}
                          </a>
                        ) : (
                          <span className="text-xs font-semibold text-white sm:text-sm">{text}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div id="contact-quick-ctas" className="flex flex-col gap-4">
                  <a
                    href={DEV_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-[#20ba56] hover:shadow-lg"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.977 0c3.222.001 6.252 1.255 8.533 3.533 2.28 2.278 3.532 5.306 3.533 8.53.003 6.657-5.322 11.981-11.97 11.981-2.005-.001-3.975-.499-5.733-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.023-5.091-2.885-6.955C16.591 1.954 14.129 1.449 11.98 1.449c-5.441 0-9.866 4.413-9.87 9.831-.001 1.77.484 3.491 1.407 5.013L2.51 21.071l4.137-1.917z" />
                    </svg>
                    WhatsApp instantané
                  </a>
                  <a
                    href={`mailto:${DEV_INFO.email}`}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-white/15 px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-white shadow-md backdrop-blur-md transition-all hover:bg-white/25 hover:shadow-lg"
                  >
                    <Mail size={14} />
                    E-mail direct
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div id="contact-form-container" className="h-full rounded-3xl border border-brand-dark/5 bg-white p-8 shadow-sm sm:p-10 lg:col-span-7">
            <AnimatePresence mode="wait">
              {sent ? (
                <Done reset={reset} />
              ) : (
                <motion.form key="contact-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={submit} className="flex flex-col gap-5">
                  {notice ? (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-xs font-semibold text-red-500">
                      <AlertCircle size={14} />
                      <span>{notice}</span>
                    </div>
                  ) : null}
                  {fields.map(({ name, id, tag, hint, kind, rows }) => (
                    <div key={name}>
                      <Field
                        id={id}
                        tag={tag}
                        hint={hint}
                        text={draft[name]}
                        flaw={flaws[name]}
                        kind={kind}
                        rows={rows}
                        busy={busy}
                        edit={(value) => input(name, value)}
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={busy}
                    className="group/btn mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-dark py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-brand-accent disabled:cursor-not-allowed disabled:bg-brand-dark/30"
                  >
                    {busy ? "Envoi en cours..." : "Envoyer le message"}
                    {!busy ? <Send size={12} className="transition-transform group-hover/btn:translate-x-0.5" /> : null}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
