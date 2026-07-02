import { MessageSquareQuote, Star } from "lucide-react";
import { TESTIMONIALS as reviews } from "../../data";
import { Motion } from "./animate";

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <header className="flex flex-col gap-2 mb-16 text-center">
          <div className="flex items-center gap-2 justify-center text-brand-accent text-xs font-mono tracking-[0.3em] font-semibold uppercase">
            <MessageSquareQuote size={14} />
            <span>RECOMMANDATIONS</span>
          </div>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-brand-dark leading-tight">
            Ce que disent mes clients
          </h2>
          <div className="h-[1px] w-20 bg-brand-accent mt-4 mx-auto" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-cards-grid-list">
          {reviews.map((review, i) => (
            <Motion.Reveal
              key={review.id}
              id={`testimonial-card-${review.id}`}
              delay={i * 0.15}
              styling="bg-brand-bg p-8 rounded-3xl border border-brand-dark/5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-brand-accent/5 select-none pointer-events-none">
                <MessageSquareQuote size={70} />
              </div>

              <div className="flex items-center gap-1 text-brand-accent mb-6">
                {Array.from({ length: review.rating }).map((_, step) => (
                  <Star key={step} size={14} fill="currentColor" />
                ))}
              </div>

              <blockquote className="font-serif italic text-sm sm:text-base text-brand-dark/80 leading-relaxed mb-8 flex-grow">
                "{review.content}"
              </blockquote>

              <footer className="flex items-center gap-4 pt-5 border-t border-brand-dark/5">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                    id={`testimonial-avatar-${review.id}`}
                  />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-sm text-brand-dark tracking-tight leading-none">
                    {review.name}
                  </h4>
                  <p className="text-[10px] font-semibold text-brand-dark/40 uppercase mt-1">
                    {review.role} <span className="text-brand-accent">@ {review.company}</span>
                  </p>
                </div>
              </footer>
            </Motion.Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
