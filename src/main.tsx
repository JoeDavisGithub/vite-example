//import { StrictMode } from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, Outlet} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import MoviesPage from './pages/MoviesPage'
import NotFoundPage from './pages/NotFoundPage'
import ActorsPage from './pages/ActorsPage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import ActorsPaginated from './pages/ActorsPaginated.tsx'
import MoviesPaginated from './pages/MoviesPaginated.tsx'
import CreateActorPage from './pages/CreateActorPage.tsx'
import CreateMoviePage from './pages/CreateMoviePage.tsx'
import EditActorPage from './pages/EditActorPage.tsx'
import EditMoviePage from './pages/EditMoviePage.tsx'

const Layout = () => {

  return (

    <div>
      <Outlet/>
    </div>

  );

}

const router = createBrowserRouter([{
  path:'/',
  element:<Layout />,
  children:[
    {
    path:'/movies',
    element:<MoviesPage />
  },
  {
    path:'/movies/page',
    element:<MoviesPaginated />
  },
  {
    path:'/',
    element:<App />
  },
  {
    path:'/actors',
    element:<ActorsPage />
  },
  {
    path:'/actors/page',
    element:<ActorsPaginated />
  },
  {
    path:'/actor',
    element:<ActorPage />
  },
  {
    path:'/movie',
    element:<MoviePage />
  },
  {
    path:'/actorcreate',
    element:<CreateActorPage />
  },
  {
    path:'/actoredit',
    element:<EditActorPage />
  },
  {
    path:'/moviecreate',
    element:<CreateMoviePage />
  },
  {
    path:'/movieedit',
    element:<EditMoviePage />
  },
  {
    path:'*',
    element:<NotFoundPage />
  }
  
]

}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
  
)
