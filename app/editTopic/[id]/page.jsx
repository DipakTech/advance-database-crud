'use client'
import React, { useState, useEffect } from 'react' // Added 'useEffect' import
import EditTopicForm from '@/components/EditTopicForm'
import axios from 'axios'

const getTopicById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/topics/${id}`, {
      headers: {
        'Cache-Control': 'no-store',
      },
    })

    if (response.status !== 200) {
      throw new Error('Failed to fetch topic')
    }

    return response.data
  } catch (error) {
    console.log(error)
    throw error // Rethrow the error to handle it at a higher level if needed
  }
}

const EditTopic = ({ params }) => {
  const { id } = params
  const [editData, setEditData] = useState({
    _id: '',
    name: '',
    age: '',
    department: '',
    mobile: '',
    salary: '',
  })

  const fetchData = async () => {
    try {
      const { topic } = await getTopicById(id)
      const { _id, name, age, department, mobile, salary } = topic

      setEditData({ _id, name, age, department, mobile, salary })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // Use 'useEffect' to fetch data when the component mounts
    fetchData()
  }, [])

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <EditTopicForm editData={editData} setEditData={setEditData} />
    </React.Suspense>
  )
}

export default EditTopic
