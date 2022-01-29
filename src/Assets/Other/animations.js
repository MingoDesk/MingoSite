export const stagger = {
  before: { opacity: 1 },
  after: { transition: { when: "beforeChildren", staggerChildren: 0.4 } },
};
export const fade = {
  before: { opacity: 0 },
  after: { opacity: 1, transition: { ease: "easeOut", duration: 1 } },
};

export const RemoveBgElements = (isMobile) => {
  return isMobile
    ? {
        before: {
          opacity: 0,
          transition: { duration: 0 },
        },
        after: {
          opacity: 0,
        },
      }
    : {
        before: {
          opacity: 1,
          transition: { duration: 0 },
        },
        after: {
          opacity: 1,
        },
      };
};
