import React, { FC } from 'react'

import styles from '../SettingModule.module.scss'

import { OnOff } from '../../../../UI'

interface ISettingEmail {

}

export const SettingEmailNotifications: FC<ISettingEmail> = () => {
  return (
    <div className={styles["setting-module__section"]}>
        <div className={styles["setting-module__subtitle"]}>Настройка email уведомлений</div>
        <div className={styles["setting-module__text"]}>Авито вправе присылать системные уведомления пользователю без возможности отписки от них.</div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Платные услуги</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Изменения статусов подключённых услуг</div>
          </div>
          <OnOff />
        </div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Персональные подборки</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Подборки интересующих объявлений и категорий</div>
          </div>
          <OnOff />
        </div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Акции</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Индивидуальные скидки и специальные предложения</div>
          </div>
          <OnOff />
        </div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Новости</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Информация о компании и новых функциях Авито</div>
          </div>
          <OnOff />
        </div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Советы от Авито</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Рекомендации по эффективной работе с сайтом</div>
          </div>
          <OnOff />
        </div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Сообщения</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Уведомления о новых сообщениях в мессенджере</div>
          </div>
          <OnOff />
        </div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Участие в исследованиях</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>На основе ваших ответов мы сделаем Авито лучше</div>
          </div>
          <OnOff />
        </div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Избранные продавцы</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Уведомления о новых объявлениях избранных продавцов</div>
          </div>
          <OnOff />
        </div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Отзывы</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Предложения оценить продавца</div>
          </div>
          <OnOff />
        </div>
      </div>
  )
}