import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { ClerkProvider } from '@clerk/clerk-react'
import Login from './auth/Login'
import EditResume from './pages/[resumeId]/EditResume'
import ViewResume from './my-resume/[resumeId]/view/ViewResume'
import About from './pages/About'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router=createBrowserRouter([
  {
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/dashboard",
        element:<Dashboard />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/resume/:resumeId/edit",
        element:<EditResume />
      }
    ]
  },
  {
    path:"/auth/login",
    element:<Login />
  },
  {
    path:"/my-resume/:resumeId/view",
    element:<ViewResume />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
