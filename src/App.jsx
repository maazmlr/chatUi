import React from 'react'
import Form from './modules/Form/Form'
import Dashboard from './modules/Dashboard/Dashboard'
import { createBrowserRouter,createRoutesFromElements ,Navigate,Route ,RouterProvider, Routes } from 'react-router-dom'

const App = () => {


  const ProtectedRoute=({children})=>{
    const isLoggedIn=localStorage.getItem("user:token") !==null;

    // if(!isLoggedIn){
    //   return <Navigate to={"/signin"}/>
    // }
    return children
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }/>

      <Route path='/signup' element={<Form isSignIn={false}/> }/>
      <Route path='/signin' element={<Form isSignIn={true}/> }/>
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App