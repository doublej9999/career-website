import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import JobList from '../pages/JobList'
import JobDetail from '../pages/JobDetail'
import Campus from '../pages/Campus'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'jobs', element: <JobList /> },
      { path: 'jobs/:id', element: <JobDetail /> },
      { path: 'campus', element: <Campus /> },
      { path: 'login', element: <Login /> },
      { path: 'profile', element: <Profile /> }
    ]
  }
])
