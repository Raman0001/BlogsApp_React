import { useParams, Link, useNavigate } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy'

const PostPage = () => {
  const history = useNavigate();
  const { id } = useParams();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById)
  const post = getPostById(id);

  const handleDelete = async (id) => {
    deletePost(id);
    history('/')
  }
  return (
    <div className='p-8'>
      <article>
        {post &&
          <>
            <h2 className='text-2xl font-mono font-bold p-2'>{post.title}</h2>
            <p className='text-md p-2'>{post.dateTime}</p>
            <p className='text-lg p-2'>{post.body}</p>
            <button className='border-2 m-2 text-white bg-red-500 hover:bg-red-700 p-2 rounded-md border-black' onClick={() => handleDelete(post.id)}>
              Delete Post
            </button>
            <Link to={`/edit/${post.id}`}>
              <button className='border-2 m-2 text-white bg-slate-500 hover:bg-slate-700 p-2 rounded-md border-black'>
                Edit Post
              </button>
            </Link>
          </>
        }{
          !post &&
          <>
            <h2 className='font-bold text-7xl text-center'>Post not found</h2>
            <p className='text-center'>well, that's disappointing</p>
            <p className='pt-10 text-center text-blue-900 underline'>
              <Link to='/'>Visit Our Homepage</Link>
            </p>
          </>
        }
      </article>
    </div>
  )
}

export default PostPage
