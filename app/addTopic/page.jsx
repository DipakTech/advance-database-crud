'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function AddTopic() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [department, setDepartment] = useState('')
  const [mobile, setMobile] = useState('')
  const [salary, setSalary] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !age || !department || !mobile || !salary) {
      alert('Title and description are required.')
      return
    }

    try {
      const { data } = await axios.post('/api/topics', {
        name,
        age,
        department,
        mobile,
        salary,
      })
      router.push('/')

      console.log(data)

      if (response.status === 200) {
        router.push('/')
      } else {
        throw new Error('Failed to create a topic')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Enter name'
      />

      <input
        onChange={(e) => setAge(e.target.value)}
        value={age}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Enter age'
      />

      <input
        onChange={(e) => setDepartment(e.target.value)}
        value={department}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Enter department'
      />

      <input
        onChange={(e) => setMobile(e.target.value)}
        value={mobile}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Enter mobile number'
      />
      <input
        onChange={(e) => setSalary(e.target.value)}
        value={salary}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Enter salary'
      />

      <button
        type='submit'
        className='bg-green-600 font-bold text-white py-3 px-6 w-fit'
      >
        Add Information
      </button>
    </form>
  )
}
