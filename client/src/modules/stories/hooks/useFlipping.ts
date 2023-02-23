import { useEffect, useState } from 'react'
import { IStories } from '../types';

export const useFlipping = (slides: string[], allStoriesLength: number, index: number, setActiveStory: React.Dispatch<React.SetStateAction<string | null>>, stories: IStories[]) => {
  //активный слайд внутри стори
  const [activeSlide, setActiveSlide] = useState<number>(0);
  //процент полосы прокрутки - макс = 100%, минимально = 0%
  const [progressBar, setProgressBar] = useState<number>(0);

  const storyBack = () => {
    setActiveStory(stories[index > 0 ? index-1 : index]._id);
    setActiveSlide(0);
  }
  const storyForward = () => {
    setActiveStory(stories[allStoriesLength - 1 > index ? index + 1 : index]._id);
    setActiveSlide(0);
  }

  useEffect(() => {
    let b: number | null;
    const a = setInterval(() => {
      if(b ? b < slides.length - 1: activeSlide < slides.length - 1) {
        setActiveSlide(
          prev => {b = prev + 1;return prev + 1}
        )
        setProgressBar(0);
      } else {
        setActiveStory(stories[allStoriesLength - 1 > index ? index + 1 : index]._id);
        setProgressBar(0);
      }
    }, 10000);
  
    const progressBarPlus = setInterval(() => {
      setProgressBar(prev => {
        if(prev === 99) return prev = 0; 
        return prev + 0.1;
      })
    }, 10);
  
    return () => {
      clearInterval(a);
      clearInterval(progressBarPlus);
    }
  }, [])

  return {
    activeSlide, setActiveSlide,
    progressBar, setProgressBar,
    storyBack, storyForward,
  }
}
