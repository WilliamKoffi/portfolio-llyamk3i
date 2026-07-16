/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare } from "lucide-react";
import { Scroll } from "./scroll";

export default function ContactFloatingButton() {
  const [show, setShow] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Mark as scrolling immediately (hides the button)
      setIsScrolling(true);

      // 2. Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // 3. Set timeout to mark as stopped scrolling (shows the button if conditions met)
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 250);

      // 4. Check if we should be showing the button based on scroll position
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        const rect = contactElement.getBoundingClientRect();
        // Hide if:
        // - We are near the top of the page (scrollY < 300)
        // - The contact section is already in or above the viewport
        const isNearTop = window.scrollY < 300;
        const isContactInView = rect.top < window.innerHeight * 0.8;

        setShow(!isNearTop && !isContactInView);
      } else {
        // Fallback if contact element doesn't exist
        setShow(window.scrollY > 300);
      }
    };

    // Run once initially to check state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    Scroll.to("contact");
  };

  // Only display if show is true and we're not currently scrolling
  const isVisible = show && !isScrolling;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-brand-accent text-white shadow-xl shadow-brand-accent/30 outline-hidden md:hidden border border-brand-accent-light/10"
          aria-label="Contacter William"
          id="contact-floating-button"
        >
          {/* Pulsing ring for a subtle, high-end feel */}
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-accent/20" />
          
          <MessageSquare size={22} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
