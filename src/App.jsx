import React from 'react'
import Form from './modules/Form/Form'
import Dashboard from './modules/Dashboard/Dashboard'
import { createBrowserRouter,createRoutesFromElements ,Route ,RouterProvider } from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Dashboard/>}/>

      <Route path='/signup' element={<Form isSignIn={false}/> }/>
      <Route path='/signin' element={<Form isSignIn={true}/> }/>
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App