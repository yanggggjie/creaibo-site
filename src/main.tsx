import { createRoot } from 'react-dom/client'
import './index.css'
import { routes } from '@generouted/react-router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Routes = () => (
  <RouterProvider
    router={createBrowserRouter(routes, { basename: '/creaibo-site' })}
  />
)

createRoot(document.getElementById('root')!).render(<Routes />)
