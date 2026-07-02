export namespace Scroll {
  export function to(id: string): void {
    const node = document.getElementById(id);
    if (!node) return;

    const offset = 80;
    const bounds = node.getBoundingClientRect().top;
    const destination = bounds + window.scrollY - offset;

    window.scrollTo({
      top: destination,
      behavior: "smooth"
    });
  }
}
