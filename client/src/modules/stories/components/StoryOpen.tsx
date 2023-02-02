import React, { FC, useEffect, useRef, useState } from 'react';

import { useClosePop } from '../../../hooks';
import { bodyScrollBlock } from '../../../utils/bodyScrollBlock';

interface IStoryOpen {
  setActiveStory: React.Dispatch<React.SetStateAction<string | null>>,
  title: string;
  isWatch: boolean;
  slides: {
    img: string;
  }[];
  id: string;
  allStoriesLength: number;
  index: number;
  stories: TStories[]
}

type TStories = {
  title: string;
  isWatch: boolean;
  slides: {
    img: string;
  }[];
  id: string;
}

export const StoryOpen: FC<IStoryOpen> = ({ slides, setActiveStory, allStoriesLength, index, stories }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const root = useRef<HTMLDivElement | null>(null);
  useClosePop(root, setActiveStory);

  useEffect(() => {
    let b: number | null;
    const a = setInterval(() => {
      if(b ? b < slides.length - 1: activeSlide < slides.length - 1) {
        setActiveSlide(prev => {b = prev + 1;return prev + 1})
      } else {
        setActiveStory(stories[allStoriesLength - 1 > index ? index + 1 : index].id);
      }
    }, 10000);
    return () => clearInterval(a)
  }, [])

  const storyBack = () => {
    setActiveStory(stories[index > 0 ? index-1 : index].id);
    setActiveSlide(0);
  }
  const storyForward = () => {
    setActiveStory(stories[allStoriesLength - 1 > index ? index + 1 : index].id);
    setActiveSlide(0);
  }

  return (
    <div className="story-open">
      <div className="story-open__container" ref={root}>
        <div className="story-open__control">
          <button className="story-open__arrow" onClick={storyBack}>{`<`}</button>
          {allStoriesLength - 1 > index ? <button className="story-open__arrow" onClick={storyForward}>{`>`}</button> : ''}
        </div>
        <div className="story-open__slides">
          {
            slides.map((el, index): React.ReactNode => {
              const width = slides.length === 1 ? '19vw' : slides.length === 2 ? '9vw' : slides.length === 3 ? '6vw' : slides.length === 4 ? '4.5vw' : slides.length === 5 ? '3.5vw' : slides.length === 6 ? '2.8vw' : ''
              return <span onClick={() => setActiveSlide(index)} className={`story-open__slide ${activeSlide === index ? 'story-open__slide--active' : ''}`} key={index} style={{'width': width}}></span>
            })
          }
        </div>
        <img src={`${slides[activeSlide].img}`} alt="Слайд" />
      </div>
    </div>
  )
}