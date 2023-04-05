import '/src/assets/styles/boostsrap.scss'
import * as bootstrap from 'bootstrap'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Main from './pages/home/main'
import Textprovider from './components/context'
import Architectural from './pages/home/architecture'
import Real_estate from './pages/home/real_estate'
import Portfolio from './pages/portfolio'
import Blog from './pages/blog'
import Our_project from './pages/ourProject'
import Contact from './pages/contact'
import Property from './pages/property'
const router = createBrowserRouter([
  {
    path: '/', element: <Home />,
    errorElement: <h1>Page Not Found</h1>,
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

