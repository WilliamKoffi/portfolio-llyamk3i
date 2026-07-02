function hash(id: string): void {
  const target = id === "accueil" || id === "top" ? `${window.location.pathname}${window.location.search}` : `#${id}`;
  window.history.pushState(null, "", target);
}

export namespace Scroll {
  export function to(id: string, options: { hash?: boolean } = {}): void {
    if (options.hash !== false) hash(id);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const node = document.getElementById(id);
    if (!node) return;

    const offset = 80;
    const bounds = node.getBoundingClientRect().top;
    const destination = bounds + window.scrollY - offset;

    window.scrollTo({ top: destination, behavior: "smooth" });
  }

  export function locate(targets: string[]): string {
    const threshold = window.scrollY + 200;

    for (const target of targets) {
      const node = document.getElementById(target);
      if (node) {
        const top = node.offsetTop;
        const height = node.offsetHeight;
        if (threshold >= top && threshold < top + height) {
          return target;
        }
      }
    }

    return targets[0];
  }
}
