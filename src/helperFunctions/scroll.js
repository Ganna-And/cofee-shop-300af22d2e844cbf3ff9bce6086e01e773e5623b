export const scrollToSection = (sectionId) => {
    const headerHeight = document.querySelector('.header').clientHeight;
    const section = document.querySelector(sectionId);
    
    if (section) {
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

 