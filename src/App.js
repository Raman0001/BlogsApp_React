import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Missing from './components/Missing'
import PostPage from './components/PostPage'
import NewPost from './components/NewPost'
import Home from './components/Home'
import About from './components/About'
import EditPost from './components/EditPost'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import useAxiosFetch from './hooks/useAxiosFetch'
import { useStoreActions } from 'easy-peasy'

// to run backend sever run cmd in other bash npx json-server -p 3500 -w ./data/db.js

const App = () => {
    const setPosts = useStoreActions((actions) => actions.setPosts);
    const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts");

    useEffect(() => {
        setPosts(data);
    }, [data, setPosts])
    return (
        <div className='flex flex-col'>
            <Header title="React JS Blogs" />
            <Nav />
            <Routes>
                <Route exact path='/' element={<Home isLoading={isLoading} fetchError={fetchError} />}></Route>
                <Route path='/post' Component={NewPost} />
                <Route path='/edit/:id' Component={EditPost} />
                <Route path='/post/:id' Component={PostPage} />
                <Route path='/about' Component={About} />
                <Route path='*' Component={Missing} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
