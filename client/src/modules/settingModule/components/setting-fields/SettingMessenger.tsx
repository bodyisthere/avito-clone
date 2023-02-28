import React, { FC } from 'react'

import styles from '../SettingModule.module.scss'

import { OnOff } from '../../../../UI'

interface ISettingMessenger {

}

export const SettingMessenger: FC<ISettingMessenger> = () => {
  return (
    <div className={styles["setting-module__section"]}>
        <div className={styles["setting-module__subtitle"]}>Уведомления о мессенджере</div>
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
            <div className={styles["setting-module__email-ntf-title"]}>Отзывы</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Предложения оценить продавца</div>
          </div>
          <OnOff />
        </div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Заказы в категории «Услуги»</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Вопросы о том, договорились ли вы с исполнителем</div>
          </div>
          <OnOff />
        </div>
        <div className={styles["setting-module__email-ntf"]}>
          <div className={styles["setting-module__email-ntf-text"]}>
            <div className={styles["setting-module__email-ntf-title"]}>Ограничения на звонки</div>
            <div className={styles["setting-module__email-ntf-subtitle"]}>Остаток вызовов частным лицам</div>
          </div>
          <OnOff />
        </div>
      </div>
  )
}