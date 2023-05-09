
export const handleTheme = (element: HTMLButtonElement):void => {

  const b = <HTMLBodyElement>document.body

  element.addEventListener('click', () => {
    if(element.textContent === 'Theme Dark') {
      b.setAttribute('data-theme', 'dark')
      element.textContent = 'Theme Light'
    } else {
      b.removeAttribute('data-theme')
      element.textContent = 'Theme Dark'
    }
  })
}
