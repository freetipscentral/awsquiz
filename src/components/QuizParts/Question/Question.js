import React from 'react';
import styles from './Question.module.css'

const quesition = (props) => {
  return (
    <h2 className={styles.Question}>{props.questionText}</h2>
  )
}

export default quesition;
