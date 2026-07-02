function updateHash(id: string): void {
  const target = id === "accueil" || id === "top" ? `${window.location.pathname}${window.location.search}` : `#${id}`;
  window.history.pushState(null, "", target);
}

export namespace Scroll {
  export function to(id: string): void {
    updateHash(id);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const node = document.getElementById(id);
    if (node) {
      const offset = 80;
      const bounds = node.getBoundingClientRect().top;
      const destination = bounds + window.scrollY - offset;

      window.scrollTo({
        top: destination,
        behavior: "smooth",
      });
    }
  }
}
