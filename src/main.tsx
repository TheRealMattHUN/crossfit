import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import {RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {AppRouter} from "./pages/AppRouter.tsx";

export const router = createBrowserRouter(createRoutesFromElements(AppRouter()), {basename: '/crossfit/'})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider defaultColorScheme="light">
    <RouterProvider router={router}/>
  </MantineProvider>
)
