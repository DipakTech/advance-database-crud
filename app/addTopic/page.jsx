'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddTopic() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [department, setDepartment] = useState('')
  const [mobile, setMobile] = useState('')
  const [salary, setSalary] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault(name, age, department, mobile, salary)

    if (!name || !age || !department || !mobile || !salary) {
      alert('Title and description are required.')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, age, department, mobile, salary }),
      })

      if (res.ok) {
        router.push('/')
      } else {
        throw new Error('Failed to create a topic')
      }
    } catch (error) {
      console.log(error)
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
