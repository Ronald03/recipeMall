// Make first letter of every word Upper Case
export function capitalize(s) {
  return s
    .split(" ")
    .map((s) => {
      return s.charAt(0).toUpperCase() + s.slice(1);
    })
    .join(" ");
}
