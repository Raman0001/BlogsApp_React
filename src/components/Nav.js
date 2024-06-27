import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Nav = () => {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.setSearch);
  const setSearchResults = useStoreActions((actions) => actions.setSearchResults);

  useEffect(() => {
    const filteredResults = posts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults.reverse());
  }, [posts, search,setSearchResults])

  return (
    <nav>
      <form
        className='flex bg-black'
        onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search"></label>
        <input type="text"
          id='search'
          placeholder='Search Posts'
          value={search}
          className='m-3 text-lg w-[100%] p-2'
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className='flex bg-black text-xl text-white '>
        <li className='mx-4 hover:bg-gray-600 px-3'><Link to='/'>Home</Link></li>
        <li className='mx-4 hover:bg-gray-600 px-3'><Link to='/post'>Post</Link></li>
        <li className='mx-4 hover:bg-gray-600 px-3'><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
