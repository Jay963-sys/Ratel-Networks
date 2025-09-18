// Utility functions for scroll-based animations

export const initScrollAnimations = () => {
  if (typeof window === "undefined") return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll(".animate-in").forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
};

export const parallaxEffect = () => {
  if (typeof window === "undefined") return;

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll(".floating-element");

    floatingElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      const rotation = scrolled * 0.01;
      (element as HTMLElement).style.transform = `translateY(${
        scrolled * speed
      }px) rotate(${rotation}deg)`;
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
};

export const smoothScroll = () => {
  if (typeof window === "undefined") return;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e: Event) {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      const target = document.querySelector(href!);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
};
