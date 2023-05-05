
import React, { Suspense } from 'react';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Example from './Example';

const ClassComponent = React.lazy(() => import('./classcomponent/ClassRoute'))
const FunctionComponent = React.lazy(() => import('./functioncomponent/FunctionalRoute'))

          const router = createBrowserRouter([
            {
            
              path: "/",
              element: <Home />,
          }, 
          {
              path: "/about",
              element: <About/>,
          },
          {
            path:"/contact",
            element : <Contact />,
          },
          {
              path: "/example",
              element: <Example />,
              children: [
                  {
                    path: "classcomponent/*",
                    element: <Suspense fallback={<h2>Loading...</h2>}><ClassComponent /></Suspense> ,
                  },
                  {
                    path: "functioncomponent/*",
                    element: <Suspense fallback={<h2>please wait</h2>}><FunctionComponent /></Suspense> ,
                  },
                ],
          },
      ]);

export default router;
