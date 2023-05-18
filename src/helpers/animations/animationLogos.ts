export const handleAnimate = (
  entry: IntersectionObserverEntry[],
  observe: IntersectionObserver
  ) => {

  entry.forEach(({isIntersecting, target}, index: number): void => {
    console.log(isIntersecting)
    if(isIntersecting) {
      setTimeout(() => {
        target.classList.add('active')
      }, 400 * index);
    }

    // observe.unobserve(target)
  })
  observe.disconnect()
}
