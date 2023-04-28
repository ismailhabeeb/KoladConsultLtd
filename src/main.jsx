import '/src/assets/styles/boostsrap.scss'
import * as bootstrap from 'bootstrap'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Textprovider from './components/context'
const Main = React.lazy(()=>import("./pages/home/main"))
const Architectural = React.lazy(()=>import("./pages/home/architecture"))
const Real_estate = React.lazy(()=>import("./pages/home/real_estate"))
const  Portfolio = React.lazy(()=>import("./pages/portfolio"))
const Blog = React.lazy(()=>import("./pages/blog"))
const Our_project = React.lazy(()=>import("./pages/ourProject"))
const Contact = React.lazy(()=>import("./pages/contact"))
const Property = React.lazy(()=>import("./pages/property"))
const Home = React.lazy(()=>import("./pages/home"))
const ErrorPage = React.lazy(()=>import('./components/error_page'))


const router = createBrowserRouter([
  {
    path: '/?', element: <Home />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '',
        element: <Main />
      },
      {
        path: 'architecture',
        element: <Architectural />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'real_estate',
        element: <Real_estate />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'our_Project',
        element: <Our_project />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'property',
        element: <Property />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Textprovider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </Textprovider>
  </React.StrictMode>
)

