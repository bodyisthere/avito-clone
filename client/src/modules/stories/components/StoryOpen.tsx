import React, { FC } from 'react';

import { countSpanWidth } from '../helpers/countSpanWidth';
import { useFlipping } from '../hooks/useFlipping';
import { IStoryOpen } from '../types';

import styles from './Stories.module.scss'

import { bodyScrollAllow } from '../../../utils/bodyScrollAllow';

export const StoryOpen: FC<IStoryOpen> = ({ slides, setActiveStory, allStoriesLength, index, stories }) => {
  const { activeSlide, progressBar, setActiveSlide, setProgressBar, storyBack, storyForward } = useFlipping(slides, allStoriesLength, index, setActiveStory, stories);

  return (
    <div className={styles["story-open"]} onClick={() => {setActiveStory(null); bodyScrollAllow(document)}}>
      <div className={styles["story-open__container"]} onClick={e => e.stopPropagation()}>
        <div className={styles["story-open__control"]}>
          <button className={styles["story-open__arrow"]} onClick={storyBack}>{`<`}</button>
          {allStoriesLength - 1 > index ? <button className={styles["story-open__arrow"]} onClick={storyForward}>{`>`}</button> : ''}
        </div>
        <div className={styles["story-open__slides"]}>
          {
            slides.map((el, index): React.ReactNode => {
              const width = countSpanWidth(slides.length);
              return (
              <span 
                onClick={() => {setActiveSlide(index); setProgressBar(0)}} 
                className={`${styles['story-open__slide']} ${activeSlide === index && styles['story-open__slide--active']}`} 
                key={index}   
                style={{'width': width}}>
                  {activeSlide === index ? <span className={styles['story-open__progress']} style={{'width':`${progressBar}%`}}></span> : ''}
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