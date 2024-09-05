import './style.css'
import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './components/404'
import Weight from './components/Weight'
import Temperature from './components/Temperature'

const root = createRoot(document.querySelector('#root'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/weight',
        element: <Weight />,
        errorElement: <ErrorPage />
      },
      {
        path: '/temperature',
        element: <Temperature />,
        errorElement: <ErrorPage />
      }
    ]
  }
])

root.render(<RouterProvider router={router} />)
