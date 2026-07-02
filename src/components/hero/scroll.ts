function updateHash(id: string): void {
  const target = id === "accueil" ? `${window.location.pathname}${window.location.search}` : `#${id}`;
  window.history.pushState(null, "", target);
}

export namespace Scroll {
  export function to(id: string): void {
    const node = document.getElementById(id);
    if (!node) return;

    updateHash(id);

    const offset = 80;
    const bounds = node.getBoundingClientRect().top;
    const destination = bounds + window.scrollY - offset;

    window.scrollTo({
      top: destination,
      behavior: "smooth"
    });
  }
}
