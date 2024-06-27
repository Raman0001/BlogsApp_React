import { useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions} from 'easy-peasy'
import { format } from 'date-fns'

const NewPost = () => {
  const history = useNavigate();
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost)
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle)
  const setPostBody = useStoreActions((actions) => actions.setPostBody)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), 'MMMM dd,yyyy pp');
    const newPost = { id, title: postTitle, body: postBody, dateTime };
    savePost(newPost)
    history('/')
  }
  return (
    <main>
      <h2 className='font-bold m-2' >New Post</h2>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label htmlFor="postTitle"></label>
        <input
          type="text"
          id='postTitle'
          required
          placeholder='Title'
          value={postTitle}
          className='m-2'
          onChange={(e) => setPostTitle(e.target.value)} />
        <label htmlFor="postBody"></label>
        <input
          type="text"
          id='postBody'
          required
          placeholder='Post'
          className='m-2'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)} />
        <button type='Submit' disabled={!postTitle ? true : false} >Submit</button>
      </form>
    </main>
  )
}

export default NewPost
