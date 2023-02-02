import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { ISubchapter } from "../../types/types";


export const Subchapter: FC<ISubchapter> = ({subchapter}) => {
  const [isFull, setIsFull] = useState<boolean>(false)

  function generateSubchapter(subchapterName: string, index: number): any {
    return (
      <li className="categories__type-subitem-list-item" key={index}>
        <Link to="">{subchapterName}</Link>
      </li>
    )
  }
  
  return (
    <li className="categories__type-subitem-list-item">
      <p className="categories__type-subitem-list-title">{subchapter.title}</p>
      <ul className="categories__type-subitem-list-items">
        {
          subchapter.subchapter.length > 5
          ?
            isFull
            ?
            <>
              {subchapter.subchapter.map((subchapterName, index) => {
                return generateSubchapter(subchapterName, index)
              })}
              <button className="categories__type-subitem-list-show-all" onClick={() => setIsFull(false)}>Скрыть</button>
            </>
            :
            <>
              {subchapter.subchapter.map((subchapterName, index) => {
                if(index >= 5) return ''
                return generateSubchapter(subchapterName, index)
              })}
              <button className="categories__type-subitem-list-show-all" onClick={() => setIsFull(true)}>Показать ещё {subchapter.subchapter.length - 5}</button>
            </>
          :
          subchapter.subchapter.map((subchapterName, index) => generateSubchapter(subchapterName, index))
        }
      </ul>
    </li>
  )
}