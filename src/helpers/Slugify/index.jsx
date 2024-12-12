export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

export const deslugify = (slug) => {
  return slug
    .toString()
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .trim(); // Trim whitespace from both ends
};
export const toTitleCase = (str) => {
  return str
    .toLowerCase() // Convert the entire string to lowercase
    .split(" ") // Split the string into words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter and concatenate with the rest
    )
    .join(" "); // Join the words back into a single string
};
