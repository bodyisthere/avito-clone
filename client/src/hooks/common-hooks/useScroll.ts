import { useRef, useEffect } from 'react'

export const useScroll = (parentRef: any, childRef: any, callback: any) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0
    }

    observer.current = new IntersectionObserver(([target]) => {
      if(target.isIntersecting) {
        callback()
      } 
    }, options)

    if(observer.current) {
      observer.current.observe(childRef.current);
    }

    return function () {
      observer.current?.unobserve(childRef.current);
    }
  }, [callback])
}

//HOW TO USE!

//const parentRef = useRef();
//const childRef = useRef();


//<div ref={parentRef}> <----------parentRef
//  {todos.map((todo, index) => <div key={index} style={{...}}>{todo.title}</div>)}
//  <div ref={childRef}>скролл должен дойти до меня, чтобы началась подгрузка даты</div>
//</div>


//родителем является тот элемент, у которого есть полоса прокрутки
//а ребёнок - это тот элемент, который должен появиться в области видимости браузера и затем должен вызваться колбек