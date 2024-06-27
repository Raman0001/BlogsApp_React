import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <div className='border-2 border-black m-2 p-2 rounded-lg'>
            <Link to={`/post/${post.id}`}>
                <h2 className='text-lg font-semibold'>{post.title}</h2>
            </Link>
            <p>
                {
                    (post.body).length <=25 ?post.body:`${(post.body).slice(0,25)}...`
                }
            </p>
                <p className='text-sm text-end text-gray-600' >{post.dateTime}</p>
                <p className='text-sm text-end text-gray-600' >{post.edit}</p>
        </div>
    )
}

export default Post
