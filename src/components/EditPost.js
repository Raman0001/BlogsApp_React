import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy';
import { format } from 'date-fns';


const EditPost = () => {
    const history = useNavigate();
    const { id } = useParams();

    const editTitle = useStoreState((state) => state.editTitle);
    const editBody = useStoreState((state) => state.editBody);

    const editPost = useStoreActions((actions) => actions.editPost)
    const setEditTitle = useStoreActions((actions) => actions.setEditTitle)
    const setEditBody = useStoreActions((actions) => actions.setEditBody)

    const getPostById = useStoreState((state) => state.getPostById)
    const post = getPostById(id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);
    const handleEdit = async (id) => {
        const dateTime = format(new Date(), 'MMMM dd,yyyy pp');
        const edit = 'Edited';
        const updatePost = { id, title: editTitle, body: editBody, dateTime, edit };
        editPost(updatePost);
        history(`/post/${id}`);
    }

    return (
        <main>
            {
                <>
                    <h2 className='font-bold m-2' >Edit Post</h2>
                    <form className='flex flex-col' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle"></label>
                        <input
                            type="text"
                            id='postTitle'
                            required
                            placeholder='Title'
                            value={editTitle}
                            className='m-2'
                            onChange={(e) => setEditTitle(e.target.value)} />
                        <label htmlFor="postBody"></label>
                        <input
                            type="text"
                            id='postBody'
                            required
                            placeholder='Post'
                            className='m-2'
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)} />
                        <button type='Submit' disabled={!editTitle ? true : false} onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {
                !editTitle &&
                <>
                    <h2 className='font-bold text-7xl text-center'>please enter the title</h2>
                    <p className='text-center'>you can't save without title</p>
                    <p className='pt-10 text-center text-blue-900 underline'>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditPost
