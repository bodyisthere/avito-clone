import React, { FC } from 'react';

import { countSpanWidth } from '../helpers/countSpanWidth';
import { useFlipping } from '../hooks/useFlipping';
import { IStoryOpen } from '../types';

export const StoryOpen: FC<IStoryOpen> = ({ slides, setActiveStory, allStoriesLength, index, stories }) => {
  const { activeSlide, progressBar, setActiveSlide, setProgressBar, storyBack, storyForward } = useFlipping(slides, allStoriesLength, index, setActiveStory, stories);

  return (
    <div className="story-open" onClick={() => setActiveStory(null)}>
      <div className="story-open__container" onClick={e => e.stopPropagation()}>
        <div className="story-open__control">
          <button className="story-open__arrow" onClick={storyBack}>{`<`}</button>
          {allStoriesLength - 1 > index ? <button className="story-open__arrow" onClick={storyForward}>{`>`}</button> : ''}
        </div>
        <div className="story-open__slides">
          {
            slides.map((el, index): React.ReactNode => {
              const width = countSpanWidth(slides.length);
              return (
              <span 
                onClick={() => {setActiveSlide(index); setProgressBar(0)}} 
                className={`story-open__slide ${activeSlide === index ? 'story-open__slide--active' : ''}`} 
                key={index}   
                style={{'width': width}}>
                  {activeSlide === index ? <span className='story-open__progress' style={{'width':`${progressBar}%`}}></span> : ''}
              </span>
              )
            })
          }
        </div>
        <img src={`http://localhost:5000/uploads/${slides[activeSlide]}`} alt="Слайд" />
      </div>
    </div>
  )
}