export const categoryFormat = (arr: string[]) => {
  return arr.map((el, index) => {
    if(index + 1 === arr.length) return el
    return el + '/'
  })
}