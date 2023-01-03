import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardOption } from '../../Components'
import { QUESTIONS } from '../../Constants'
import './styles.scss'

export function PetQuestion() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [filter, setFilter] = useState([])
  const navigate = useNavigate()

  function onSubmit(request) {
    if (questionIndex === QUESTIONS.length - 1) {
      navigate('/pet-name-picker/result', {state: { filters: [...filter, request] }})
    } else {
      setFilter([...filter, request])
      setQuestionIndex(questionIndex + 1)
    }
    console.log(filter)
  }

  return (
    <div id='pet-question'>
      <h1 className='question-title'>{QUESTIONS[questionIndex].question}</h1>
      <div className='container-options'>
        <CardOption name={QUESTIONS[questionIndex].opt1} onClick={() => onSubmit(QUESTIONS[questionIndex].opt1)} />
        <CardOption name={QUESTIONS[questionIndex].opt2} onClick={() => onSubmit(QUESTIONS[questionIndex].opt2)} />
      </div>
    </div>
  )
}
