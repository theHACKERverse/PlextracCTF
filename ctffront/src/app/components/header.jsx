'client'
import React from 'react'

const header = () => {
  return (
    <div>
        <nav className="bg-blue-400  
                py-4 text-white fixed  
                w-full top-0 left-0"> 
        <div className="container mx-auto"> 
            <ul className="ml-8 space-x-4"> 
                <li className="inline-block"> 
                    <a href="/" 
                       className="hover:text-gray-300"> 
                        Home 
                    </a> 
                </li> 
                <li className="inline-block"> 
                    <a href= 
"/readMessage" 
                       className="hover:text-gray-300"> 
                        View Posts 
                    </a> 
                </li> 
                <li className="inline-block"> 
                    <a href= 
"/createMessage"
                        className="hover:text-gray-300"> 
                        Create Post 
                    </a> 
                </li> 
            </ul> 
        </div> 
    </nav>
    </div>
  )
}

export default header