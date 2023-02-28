import React, { FC } from 'react'

import styles from './SafetyModule.module.scss'

interface ISafetyModule {

}

export const SafetyModule: FC<ISafetyModule> = () => {
  return (
    <div className="safety-module">
      <div className={styles["safety-module__title"]}>Защита профиля</div>
    </div>
  )
}