export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = 110;
    const offset = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
} 