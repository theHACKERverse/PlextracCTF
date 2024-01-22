'use client'
import React,{useState} from'react';
export default function Test(){

    const [formData, setFormData] = useState({
        name: '',
        body: ''
    })
    async function onSubmit(event) {
        event.preventDefault()
        var body = formData
        const response = await fetch('http://localhost:8000/messagePost', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: body.name, body: body.body})
        })
     
        // Handle response if necessary
        const data = await response.json()
        console.log(data)
        // ...
      }
    return <div>
    <span className='mt-20 text-black p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
    <form className='items-center' onSubmit={onSubmit}>
      <input onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name}  type='text' name='name' placeholder='Title of post' className='border-2 border-gray m-8 text-center '>
      </input>
      <textarea onChange={(e) => setFormData({...formData, body: e.target.value})}  value={formData.body} type='text' name='body' placeholder='Body of post' className='border-2 border-gray m-8 text-center '>
      </textarea>
      <button className='ml-10 border-2 p-2 text-center border-black' type='submit'>Submit</button>
    </form>
    </span>
    </div>
}