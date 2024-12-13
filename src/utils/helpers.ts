
export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  export const formatDate = (date: string): string => {
  
    const [month, year] = date.split(' ');
    return `${capitalizeFirstLetter(month.toLowerCase())} ${year}`;
  };
  
 
  export const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -60; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  export const createIntersectionObserver = (callback: IntersectionObserverCallback) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    return new IntersectionObserver(callback, options);
  };