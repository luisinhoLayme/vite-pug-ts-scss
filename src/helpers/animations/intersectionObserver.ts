
export const observer = (callback: IntersectionObserverCallback, options: IntersectionObserverInit,) => {
  return new IntersectionObserver(callback, options)
}

// export const observer = {
//   intersection: (
//     callback: IntersectionObserverCallback,
//     options:IntersectionObserverInit
//     ) => {
//       return new IntersectionObserver(callback, options)
//   }
// }
