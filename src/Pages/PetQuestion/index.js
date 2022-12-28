import React from 'react'
import { CardOption } from '../../Components'
import './styles.scss'

export function PetQuestion() {
  return (
    <div id='pet-question'>
      <h1 className='question-title'>Qual a espécie do seu Pet?</h1>
      <div className='container-options'>
        <CardOption name='Cachorro' />
        <CardOption name='Gato' />
      </div>
    </div>
  )
}
