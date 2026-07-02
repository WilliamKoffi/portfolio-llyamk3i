import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  reset: () => void;
};

export function Done({ reset }: Props) {
  return (
    <motion.div
      key="success-screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-5 py-12 text-center"
      id="contact-success-screen"
    >
      <div className="rounded-full border border-green-100 bg-green-50 p-4 text-green-500 shadow-sm">
        <CheckCircle size={40} />
      </div>
      <div>
        <h3 className="font-sans text-xl font-extrabold tracking-tight text-brand-dark sm:text-2xl">
          E-mail préparé avec succès
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-brand-dark/60 sm:text-sm">
          Votre application e-mail s'est ouverte avec le message prérempli. Envoyez-le depuis votre messagerie pour finaliser la prise de contact.
        </p>
      </div>
      <button
        onClick={reset}
        className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full border border-brand-dark/10 bg-brand-bg px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-dark transition-colors hover:bg-brand-dark/5"
      >
        Retourner au formulaire
        <ArrowRight size={12} />
      </button>
    </motion.div>
  );
}
