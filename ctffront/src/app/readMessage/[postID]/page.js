'use client'
import {useEffect, useState} from 'react';

export default function Page({ params }) {
    const [postData, setPostData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Replace 'YOUR_API_URL' with the actual URL of your API
            const response = await fetch(`http://localhost:8000/messageGet?postId=${params.postId}`);
            const data = await response.json();
            setPostData(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
      var data = postData
      console.log(data)
      if (data){return( 
        <div>
        <div className='mt-20'>My Title: {data.name}</div>
        <div className='mt-20'>My Body: {data.body}</div>
        </div>
        )}
        else{return(<div>Loading...</div>)}
  }