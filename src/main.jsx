import '/src/assets/styles/boostsrap.scss'
import * as bootstrap from 'bootstrap'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Main = React.lazy(()=>import("./pages/home/main"))
const  Portfolio = React.lazy(()=>import("./pages/portfolio"))
const Contact = React.lazy(()=>import("./pages/contact"))
const Home = React.lazy(()=>import("./pages/home"))
const ErrorPage = React.lazy(()=>import('./components/error_page'))


const router = createBrowserRouter([
  {
    path: '/', element: <Home />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '',
        element: <Main />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
  </React.StrictMode>
)

