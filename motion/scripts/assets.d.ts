// The portfolio's profile imports its photo the Next.js way; the capture script only reads text fields.
declare module "*.jpg" {
  const image: { src: string };
  export default image;
}
