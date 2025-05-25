function scrollToSection(sectionId, offsetTop = 0) {
  const element = document.getElementById(sectionId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offsetTop;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.error(`Section with ID '${sectionId}' not found.`);
  }
}