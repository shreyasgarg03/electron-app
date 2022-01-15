import React, { useState } from 'react'
import './PassForm.scss'

import axios from 'axios'

// hook //
import useStateWithValid from '../../Hooks/StateWithValidation/useStateWithValidation'
// icons //
import { FaPlus } from 'react-icons/fa'
import IconButton from '../IconButton/IconButton'

const Form = () => {
  // env variables //
  const [data, setData] = useState({
    title: '',
    password: '',
    username: '',
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // make request to server //
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = JSON.stringify([
      [title, username, password, new Date().toLocaleString()],
    ])
    const url = `https://v1.nocodeapi.com/skdev1800/google_sheets/ncHRqIZkcuKnzsfR?tabId=Password`
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })
      // const res = await axios.get(url)
      // console.log(res)
      console.log(res)
    } catch (err) {
      console.error(err)
    }
  }

  const { title, password, username } = data
  return (
    <form className='pass_form' onSubmit={handleSubmit}>
      <div className='pass_form_title'>
        <input
          className='input input_title'
          type='text'
          name='title'
          id='title'
          onChange={handleChange}
          value={title}
          placeholder='Title'
        />
      </div>
      <div className='pass_form_username'>
        <input
          className='input input_username'
          type='text'
          name='username'
          id='username'
          onChange={handleChange}
          value={username}
          placeholder='UserName'
        />
      </div>
      <div className='pass_form_password'>
        <input
          className='input input_password'
          type='text'
          name='password'
          id='password'
          onChange={handleChange}
          value={password}
          placeholder='Password'
        />
      </div>
      <button className='input_btn btn'>
        <span>Add</span>
        <span>
          <FaPlus />
        </span>
      </button>
    </form>
  )
}

export default Form
