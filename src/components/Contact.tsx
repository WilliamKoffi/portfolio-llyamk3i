import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { DEV_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple client-side form validation
  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Le nom est requis.";
    if (!formData.email.trim()) {
      tempErrors.email = "L'adresse e-mail est requise.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "L'adresse e-mail est invalide.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Le sujet est requis.";
    if (!formData.message.trim()) tempErrors.message = "Le message est requis.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1500);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-16 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start text-brand-accent text-xs font-mono tracking-[0.3em] font-semibold uppercase">
            <Mail size={14} />
            <span>CONTACT</span>
          </div>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-brand-dark leading-tight">
            Donnons vie à votre projet
          </h2>
          <div className="h-[1px] w-20 bg-brand-accent mt-4 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct details, WhatsApp/Email CTA */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-extrabold text-2xl text-brand-dark tracking-tight leading-snug">
                Vous avez une idée de produit ? Travaillons ensemble.
              </h3>
              <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed font-medium">
                Que vous ayez besoin d'une application mobile haute performance, d'un site web corporate élégant, ou d'une refonte complète de votre expérience utilisateur, je suis là pour vous accompagner.
              </p>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-col gap-5" id="contact-info-list">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl text-brand-accent border border-brand-dark/5 shadow-xs shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-brand-dark/40 uppercase tracking-wider block">EMAIL</span>
                  <a href={`mailto:${DEV_INFO.email}`} className="text-xs sm:text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
                    {DEV_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl text-brand-accent border border-brand-dark/5 shadow-xs shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-brand-dark/40 uppercase tracking-wider block">TELEPHONE</span>
                  <span className="text-xs sm:text-sm font-semibold text-brand-dark">
                    {DEV_INFO.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl text-brand-accent border border-brand-dark/5 shadow-xs shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-brand-dark/40 uppercase tracking-wider block">LOCALISATION</span>
                  <span className="text-xs sm:text-sm font-semibold text-brand-dark">
                    Paris, France / Télétravail international
                  </span>
                </div>
              </div>
            </div>

            {/* Double Quick Call-to-Actions (WhatsApp & Mailto buttons) */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4" id="contact-quick-ctas">
              {/* WhatsApp Button */}
              <a
                href={DEV_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-[#25D366] text-white hover:bg-[#20ba56] text-xs font-bold uppercase tracking-widest rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.977 0c3.222.001 6.252 1.255 8.533 3.533 2.28 2.278 3.532 5.306 3.533 8.53.003 6.657-5.322 11.981-11.97 11.981-2.005-.001-3.975-.499-5.733-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.023-5.091-2.885-6.955C16.591 1.954 14.129 1.449 11.98 1.449c-5.441 0-9.866 4.413-9.87 9.831-.001 1.77.484 3.491 1.407 5.013L2.51 21.071l4.137-1.917z" />
                </svg>
                WhatsApp Instantané
              </a>

              {/* Email Direct Button */}
              <a
                href={`mailto:${DEV_INFO.email}`}
                className="flex-1 py-4 bg-brand-dark text-white hover:bg-brand-accent text-xs font-bold uppercase tracking-widest rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Mail size={14} />
                Email Direct
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-brand-dark/5 shadow-sm" id="contact-form-container">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-brand-dark/60">
                      Votre Nom Complet
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`w-full px-4 py-3 bg-brand-bg rounded-xl border transition-all text-sm outline-none ${
                        errors.name
                          ? "border-red-400 focus:border-red-500"
                          : "border-brand-dark/5 focus:border-brand-accent/50 focus:bg-white"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] font-mono text-red-500 font-semibold">{errors.name}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-brand-dark/60">
                      Adresse E-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="jean.dupont@entreprise.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full px-4 py-3 bg-brand-bg rounded-xl border transition-all text-sm outline-none ${
                        errors.email
                          ? "border-red-400 focus:border-red-500"
                          : "border-brand-dark/5 focus:border-brand-accent/50 focus:bg-white"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] font-mono text-red-500 font-semibold">{errors.email}</span>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-wider text-brand-dark/60">
                      Sujet du Message
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Création d'une application e-commerce"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className={`w-full px-4 py-3 bg-brand-bg rounded-xl border transition-all text-sm outline-none ${
                        errors.subject
                          ? "border-red-400 focus:border-red-500"
                          : "border-brand-dark/5 focus:border-brand-accent/50 focus:bg-white"
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[10px] font-mono text-red-500 font-semibold">{errors.subject}</span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-brand-dark/60">
                      Votre Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Bonjour William, nous aimerions développer une plateforme sur-mesure..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`w-full px-4 py-3 bg-brand-bg rounded-xl border transition-all text-sm outline-none resize-none ${
                        errors.message
                          ? "border-red-400 focus:border-red-500"
                          : "border-brand-dark/5 focus:border-brand-accent/50 focus:bg-white"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[10px] font-mono text-red-500 font-semibold">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 mt-2 bg-brand-dark text-white hover:bg-brand-accent text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:bg-brand-dark/30 disabled:cursor-not-allowed group/btn"
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Envoyer le message
                        <Send size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center py-12 gap-5"
                  id="contact-success-screen"
                >
                  <div className="p-4 bg-green-50 rounded-full text-green-500 border border-green-100 shadow-sm">
                    <CheckCircle size={40} />
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-brand-dark tracking-tight">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-dark/60 leading-relaxed mt-2 max-w-sm mx-auto">
                      Merci pour votre intérêt, William Konan vous recontactera par e-mail ou par téléphone sous 24 à 48 heures ouvrées pour échanger sur votre projet.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-brand-bg hover:bg-brand-dark/5 text-brand-dark text-xs font-bold uppercase tracking-widest rounded-full border border-brand-dark/10 transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    Retourner au formulaire
                    <ArrowRight size={12} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
