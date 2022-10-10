import React from 'react'
import { useState } from 'react'
import '../styles/textbox.css'
import '../styles/App.css'
import '../styles/articles/articles.css'


export default function Articles() {
    
    // comments
    const [message, setMessage] = useState('')
    const [totalComments, setTotalComments] = useState('')

    // author
    const [author, setAuthor] = useState('')
    // const [authors, setAuthors] = useState([])

    const comments = [];

  const handleSubmit = (e) => {
    setMessage(e.target.value)
    comments.push(author)
    comments.push(message)
    console.log(comments);
    setTotalComments(comments)

    console.log(totalComments);
    }
    console.log(totalComments);

    const handleChange = (e) => {
        setMessage(e.target.value)
        
    }

    const authorChange = (e) => {
        setAuthor(e.target.value)
    }
    
    return (
        <div className='main'>

        <div>
          
        </div>

        <div>
          
        </div>
            <div className='comments'>
            {/* {message} */}
            <br/>
           {totalComments?.map((comment) => (
               <>
               <p key={comment}>{comment}</p>
               </>
           ))}
            </div>
        <label>
            Leave a comment
            <br/>
            <input
            onChange={handleChange}
            value={message}
            className='textbox' 
            type="text" 
            
            placeholder='write your message' />
            <br/>


             <input
            onChange={authorChange}
            value={author}
            className='author' 
            type="text" 

            placeholder='Name' />
        </label>
        <br/>
        <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}