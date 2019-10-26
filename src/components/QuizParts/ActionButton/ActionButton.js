import React from 'react'
import styles from './ActionButton.module.css'

const actionButton = (props) => {
  return (
    <button className={styles.Button} onClick={props.clickAction}>{props.buttonLabel}</button>
  )
}

export default actionButton;
