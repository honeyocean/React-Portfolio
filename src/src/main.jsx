import ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const router = createBrowserRouter([
    {
        path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'resume',
        element: <Resume />
      }
    ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);