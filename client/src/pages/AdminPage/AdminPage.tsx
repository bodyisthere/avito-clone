import React, { FC, useState } from 'react'
import { AStory, PopAddStory, PopDeleteStory } from '../../modules/ADMIN/AStory'

import './AdminPage.scss'

import { PopUp } from '../../UI/PopUp/PopUp'

interface IAdminPage {

}

export const AdminPage: FC<IAdminPage> = () => {
  const [popType, setPopType] = useState<'addStory' | 'deleteStory' | null | false>(null);

  return (
    <div className="admin-page">
      {popType === 'addStory' ? <PopUp changeStateFunction={setPopType}><PopAddStory /></PopUp> : ''}
      {popType === 'deleteStory' ? <PopUp changeStateFunction={setPopType}><PopDeleteStory /></PopUp> : ''}

      <div className="admin-page__container">
        <div className="admin-page__card">
            <AStory setPopType={setPopType}/>
        </div>
      </div>
    </div>
  )
}