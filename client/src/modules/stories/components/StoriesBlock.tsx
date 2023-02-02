import React, { FC, useRef, useState } from 'react';

import './Stories.scss'
import { Story } from './Story';
import { StoryOpen } from './StoryOpen';

//тестовая дата
import { testData } from './test.data';

export const StoriesBlock: FC = () => {
  const [stories, setStories] = useState(testData);
  const [activeStory, setActiveStory] = useState<string | null>(null);

  const root = useRef<HTMLDivElement | null>(null);

  // const prevHandler = () => {}
  // const nextHandler = () => {
  //   root.current?.childNodes.forEach(el => console.log(el))
  //   if(root.current) root.current.style.transform = 'translateX(100px)'
  // }

  return (
    <div>
      <div className="stories">
        {/* <div className="stories__control">
          <button className="stories__navigate" onClick={prevHandler}>{`<`}</button>
          <button className="stories__navigate" onClick={nextHandler}>{`>`}</button>
        </div> */}
        <div className="stories__container" ref={root}>
          {stories.map((el, index): React.ReactNode => {
            return <Story key={index} {...el} setActiveStory={setActiveStory}/>
          })}
        </div>
        {activeStory !== null
          ? 
          stories.map((el, index): React.ReactNode => {
            if(el.id !== activeStory) return;
            return <StoryOpen stories={stories} key={index} {...el} index={index} setActiveStory={setActiveStory} allStoriesLength={stories.length} />
          })
          : 
          ''
        }
      </div>
    </div>
  )
}