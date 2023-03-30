// Import our custom CSS
import '/src/assets/styles/boostsrap.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layout from './components/login_layout'
// import Login from './pages/login'
// import Signup from './pages/signup'
import Home from './pages/home'
import Main from './pages/home/main'
// import Forgot_password from './pages/porget_password/forgot_password'
// import Reset_password from './pages/porget_password/reset_password'
// import New_password from './pages/porget_password/new_password'
// import Verify from './pages/porget_password/verify'
// import Sidebar from './pages/profile'
// import Add_listing from './pages/profile/add_to_listing'
// import Profile from './pages/profile/profile'
import Textprovider from './components/context'
// import Blog from './pages/dashboard/blog'
// import Favorites from './pages/profile/favorites'
// import My_listing from './pages/profile/my_listing'
// import Property from './pages/dashboard/porperty'
const router = createBrowserRouter([
  {
    path: '/', element: <Home/>,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path: '',
        element: <Main />
      },
      // {
      //   path: 'blog',
      //   element: <Blog />
      // },
      // {
      //   path: 'property',
      //   element: <Property />
      // },
    ]
  },
  // {
  //   path: '/profile', element: <Sidebar />,
  //   errorElement: <h1>Page Not Found</h1>,
  //   children: [
  //     {
  //       path: 'add-to-listing',
  //       element: <Add_listing />
  //     },
  //     {
  //       path: '',
  //       element: <Profile />
  //     },
  //     {
  //       path: 'favorites',
  //       element: <Favorites />
  //     },
  //     {
  //       path: 'my-list',
  //       element: <My_listing />
  //     },
  //   ]
  // }
])
// Add_listing
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Textprovider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </Textprovider>
  </React.StrictMode>,
)

