import React, { useState } from 'react'
import { CardOption } from '../../Components'
import { QUESTIONS } from '../../Constants'
import './styles.scss'

export function PetQuestion() {
  const [questionIndex, setQuestionIndex] = useState(0)

  function onSubmit() {
    if (questionIndex === QUESTIONS.length - 1) {
      console.log('batata')
    } else {
      setQuestionIndex(questionIndex + 1)
    }
  }

  return (
    <div id='pet-question'>
      <h1 className='question-title'>{QUESTIONS[questionIndex].question}</h1>
      <div className='container-options'>
        <CardOption name={QUESTIONS[questionIndex].opt1} onClick={() => onSubmit()} />
        <CardOption name={QUESTIONS[questionIndex].opt2} onClick={() => onSubmit()} />
      </div>
    </div>
  )
}
