'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { set } from 'mongoose'

export default function EditTopicForm({ editData, setEditData }) {
  const { _id: id, name, age, department, mobile, salary } = editData
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, age, department, mobile, salary }),
      })

      if (!res.ok) {
        throw new Error('Failed to update topic')
      }

      router.refresh()
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
        value={editData.name}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Enter name'
      />

      <input
        onChange={(e) => setEditData({ ...editData, age: e.target.value })}
        value={editData.age}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Enter age'
      />

      <input
        onChange={(e) =>
          setEditData({ ...editData, department: e.target.value })
        }
        value={editData.department}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Enter department'
      />

      <input
        onChange={(e) => setEditData({ ...editData, mobile: e.target.value })}
        value={editData.mobile}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Enter mobile number'
      />
      <input
        onChange={(e) => setEditData({ ...editData, salary: e.target.value })}
        value={editData.salary}
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
