import { useStoreState } from 'easy-peasy';
import Feed from './Feed'

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className='flex flex-col' >
      {isLoading && <p className='font-bold text-xl text-center m-56'>Loading...</p>}
      {!isLoading && fetchError && <p className='font-bold text-xl text-red-500 text-center m-56'>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> :
        <p className='font-bold text-xl text-center m-56'>
          No Search Results To Display.
        </p>)}
    </main>
  )
}

export default Home
