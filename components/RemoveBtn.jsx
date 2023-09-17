'use client'

import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useState } from 'react'

export default function RemoveBtn({ id }) {
  const [message, setMessage] = useState()
  const router = useRouter()
  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
      const { data } = await axios.delete(
        `http://localhost:3000/api/topics?id=${id}`,
        {
          method: 'DELETE',
        }
      )
      setMessage(data.message)

      router.push('/')
    }
  }

  if (message) {
    return <p>{message}</p>
  }

  return (
    <button onClick={removeTopic} className='text-red-400'>
      <HiOutlineTrash size={24} />
    </button>
  )
}
