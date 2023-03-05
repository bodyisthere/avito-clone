//импорт внешних пакетов
import React, { FC } from 'react'

//импорт стилей
import styles from './Contacts.module.scss'

//импорт типов

//импорт функционала

//импорт компонентов
import { Radio } from '../../../../../UI/Radio/Radio'


interface IContacts {
  setForm: any
} 

export const Contacts: FC<IContacts> = ( { setForm }) => {
  return (
    <div className={styles.contacts}>
      <div className={styles.top}>
        <div className={styles.text}>Телефон</div>
        <div className={styles.phone}>
          <input type="text" className={styles.input} />
          <p className={styles.alert}>
            <i className="fa-solid fa-shield"></i>
            Чтобы ваш настоящий номер не попал в базы мошенников,
            мы показываем вместо него подменный,
            а звонки переводим вам. <br />
            Эту защиту нельзя отключить.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.text}>Способ связи</div>
        <Radio data={['По телефону и в сообщениях', 'По телефону']} setFunction/>
      </div>
    </div>
  )
}