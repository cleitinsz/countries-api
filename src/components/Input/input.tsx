import React, { useState } from 'react'
import * as C from './styles'
import { InputTS } from '../../types/Input'
import useDebounce from './useDebounce'
import { useForm } from '../../contexts/ThemeContext'

const delay = 250

const Input = ({value, setSearch}: InputTS) => {
  const { state } = useForm()

  const [input, setInput] = useState('')

  const debouncedChange = useDebounce(setSearch, delay)

  const handleChange= (e: string) => {
    setInput(e)
    debouncedChange(e)
  }

  return (
    <C.InputArea theme={state.theme}>
        <input 
          value={input}
          onChange={e => handleChange(e.target.value)}
          type="text"
          placeholder='Search by Country'
          />
        <select onChange={e => setSearch(e.target.value)}>
          <option value="Filter by Region" disabled selected >
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
    </C.InputArea>
  )
}

export default Input