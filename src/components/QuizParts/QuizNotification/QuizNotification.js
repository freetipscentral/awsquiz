import React from 'react'
import Header from '../Header/Header';
import ActionButton from '../ActionButton/ActionButton';

const quizNotification = (props) => {
  return (
    <div>
      <Header headerText={props.headerText} />
      <ActionButton clickAction={props.startQuiz} buttonLabel='Start Quiz'/>
    </div>
  )
}

export default quizNotification;
