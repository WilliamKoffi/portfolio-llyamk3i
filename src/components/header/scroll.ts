export namespace Scroll {
  export function to(id: string): void {
    const node = document.getElementById(id);
    if (!node) return;

    const extra = id === "contact" ? 40 : 0;
    const offset = 80 + extra;
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
