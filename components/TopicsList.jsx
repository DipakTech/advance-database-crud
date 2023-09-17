'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'
import axios from 'axios'

const getTopics = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/topics', {
      headers: {
        'Cache-Control': 'no-store',
      },
    })

    if (response.status !== 200) {
      throw new Error('Failed to fetch topics')
    }

    return response.data
  } catch (error) {
    console.log('Error loading topics: ', error)
    return { topics: [] }
  }
}

export default function TopicsList() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const fetchTopics = async () => {
      const { topics } = await getTopics()
      setTopics(topics)
    }
    fetchTopics()
  }, [])

  return (
    <>
      {topics.map((t) => {
        return (
          <div
            key={t._id}
            className='p-4 border px-4 py-5 shadow-md rounded-md w-full border-slate-300 my-3 flex justify-between gap-5 items-start'
          >
            <div className=''>
              <h2 className='font-bold text-2xl'>Name : {t.name}</h2>
              <h3 className='text-bold text-xl'>Age : {t.age}</h3>
              <h3 className='text-bold text-xl'>Department :{t.department}</h3>
              <h3 className='text-bold text-xl'>Mobile no :{t.mobile}</h3>
              <h3 className='text-bold text-xl'>Salary : {t.salary}</h3>
            </div>
            <div className='flex gap-2'>
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}
