/*eslint array-callback-return: 0*/
/*eslint react-hooks/exhaustive-deps: 0*/

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import './styles.scss'

export function PetNameResult() {
  const location = useLocation()
  const [result, setResult] = useState([])
  const [filters] = useState(location.state.filters)
  
  useEffect(() => {
    let prompt = '10 Sugestões de nomes brasileiros para animal de estimação'
    filters.map((item) => {
      prompt = prompt.concat(' ').concat(item)
    })
    axios.post('https://api.openai.com/v1/completions', 
          {
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 4000,
            temperature: 1.0
          },
          { 
            headers: {
                Authorization: "Bearer " + process.env.OPENAI_APIKEY
            },
          }
        )
        .then(response => setResult(response.data.choices[0].text.split(/\r?\n/).filter(entry => /\S/.test(entry))))
        console.log(prompt)
  }, [])

  return (
    <div id='pet-name-result'>
      <h1 className='question-title'>Segue abaixo sugestões de nome para seu Pet:</h1>
      <div className='result-card'>
        <br/>
        {result && result.map((item, index) => {
          return (
            <>
              {(index + 1) + ' - ' + item.replace(/[^a-zA-Z]/g,'')} <br/>
            </>
          )
        })}
        <br/>
      </div>
    </div>
  )
}
