import React, { FC, useRef, useState } from 'react';

import './Stories.scss'
import { Story } from './Story';
import { StoryOpen } from './StoryOpen';
import { storiesApi } from '../../../store/api/storiesApi';
import { Loader } from '../../../UI';

//тестовая дата
import { testData } from './test.data';

export const StoriesBlock: FC = () => {
  const [stories, setStories] = useState(testData);
  const [activeStory, setActiveStory] = useState<string | null>(null);

  const { data, isLoading, isError } = storiesApi.useGetAllStoriesQuery();
 
  const root = useRef<HTMLDivElement | null>(null);

  // const prevHandler = () => {}
  // const nextHandler = () => {
  //   root.current?.childNodes.forEach(el => console.log(el))
  //   if(root.current) root.current.style.transform = 'translateX(100px)'
  // }

  return (
    <div>
      <div className="stories" style={isLoading ? {'justifyContent':'center'} : {'justifyContent':'flex-start'}}>
        {/* <div className="stories__control">
          <button className="stories__navigate" onClick={prevHandler}>{`<`}</button>
          <button className="stories__navigate" onClick={nextHandler}>{`>`}</button>
        </div> */}
        {isLoading ? <Loader /> : ''}
        <div className="stories__container" ref={root}>
          { 
          data
          ?
            data.map((el, index): React.ReactNode => {
              return <Story isWatch={false} key={index} {...el} setActiveStory={setActiveStory}/>
            })
          :
            ''
          }
        </div>
        {activeStory !== null && data
          ? 
          data.map((el, index): React.ReactNode => {
            if(el._id !== activeStory) return;
            return <StoryOpen isWatch={false} stories={data} key={index} {...el} index={index} setActiveStory={setActiveStory} allStoriesLength={stories.length} />
          })
          : 
          ''
        }
      </div>
    </div>
  )
}