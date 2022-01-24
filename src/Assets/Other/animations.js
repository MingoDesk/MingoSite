export const stagger = {
    before:{ opacity: 1},
    after: {transition: { when: "beforeChildren", staggerChildren: .4, } },
}
export const fade = {
    before: { opacity: 0 },
    after: { opacity: 1, transition: { ease: "easeOut", duration: 1, } },
  };