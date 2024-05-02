import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import LoadPage from '../pages/LoadPage'
import TodoList from '../pages/TodoList'

export default function Router({ setMode }) {
  const routes = useRoutes([
    { path: '/', element: <TodoList /> },
    { path: '*', element: <NotFound /> },
  ])

  return <Suspense fallback={<LoadPage></LoadPage>}>{routes}</Suspense>
}

const NotFound = () => <h1>404 Not Found.</h1>
