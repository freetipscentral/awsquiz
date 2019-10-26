import React, {Component} from 'react';
import Answer from './Answer/Answer';
import ActionButton from '../ActionButton/ActionButton';
import styles from './Answers.module.css'

class Answers extends Component {
  state = {
         ansStyles: [{
          margin: '40px',
          border: '1px solid green',
          color: 'white',
          backgroundColor: '#008CBA',
          padding: '20px',
          with: '50%'
        },
        {
         margin: '40px',
         border: '1px solid green',
         color: 'white',
         backgroundColor: '#008CBA',
         padding: '20px',
         with: '50%'
       },
       {
        margin: '40px',
        border: '1px solid green',
        borderRadius: '25px !important',
        color: 'white',
        backgroundColor: '#008CBA',
        padding: '20px',
        with: '50%'
      },
      {
       margin: '40px',
       border: '1px solid green',
       borderRadius: '25px !important',
       color: 'white',
       backgroundColor: '#008CBA',
       padding: '20px',
       with: '50%'
      }
     ],
    answered: false
  }

  componentWillReceiveProps(nextProps){
      const answered = false;
      const styles = [{
       margin: '40px',
       border: '1px solid green',
       color: 'white',
       backgroundColor: '#008CBA',
       padding: '20px',
       with: '50%'
     },
     {
      margin: '40px',
      border: '1px solid green',
      color: 'white',
      backgroundColor: '#008CBA',
      padding: '20px',
      with: '50%'
    },
    {
     margin: '40px',
     border: '1px solid green',
     color: 'white',
     backgroundColor: '#008CBA',
     padding: '20px',
     with: '50%'
   },
   {
    margin: '40px',
    border: '1px solid green',
    borderRadius: '25px !important',
    color: 'white',
    backgroundColor: '#008CBA',
    padding: '20px',
    with: '50%'
   }
  ];
  if(nextProps.questionId !== this.props.questionId){
      this.setState({ansStyles:styles,answered:answered});
  }
  }

  clickAction = (e) => {
    let color = '#F44336';
    if(e.target.id === this.props.rightAnswer) {
      color = '#4CAF50';
    }
    let i = e.target.id;
    let oldStyles = { ...this.state.ansStyles };
    const indivStyle = oldStyles[i-1];
    const oldIndivStyle = {...indivStyle};

    oldIndivStyle['backgroundColor'] = color;
    oldStyles[i-1] = oldIndivStyle;
    this.setState({ansStyles: oldStyles, answered: true});
  }

  render() {
    const answerSet = this.props.answers.map((eans, i) => {
      return (
          <Answer
            label={eans.label}
            key={i}
            id={i+1}
            classToApply={this.state.ansStyles[i]}
            onAnswer={this.clickAction}
            />
          )
    });

    let nextButton = null;
    if(this.state.answered) {
      nextButton = <ActionButton clickAction={this.props.nextQuestion} buttonLabel='Next Question'/>
    }

    return (
      <div>
      {answerSet}
      {nextButton}
      </div>
    )
  }

}

export default Answers;
