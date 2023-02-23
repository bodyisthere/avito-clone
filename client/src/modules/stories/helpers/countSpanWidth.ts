export const countSpanWidth  = (slidesLength: number): string => {
  const width = 
    slidesLength === 1 ? '19vw' : 
    slidesLength === 2 ? '9vw' : 
    slidesLength === 3 ? '6vw' : 
    slidesLength === 4 ? '4.5vw' : 
    slidesLength === 5 ? '3.5vw' : 
    slidesLength === 6 ? '2.8vw' : ''
  return width;
}