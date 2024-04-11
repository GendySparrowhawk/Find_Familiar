import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useQuery, gql, from, useReadQuery } from '@apollo/client'
import { useStore } from './store'

import Protect from './componets/Protect'
import Footer from './componets/Footer'

import Home from './pages/Home'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

export const AUTHENTICATE = gql`
query {
  authenticate {
    _id
    email
    username
    profilePicture
    campaigns {
      _id
      name
      npcs
      encounters
    }
    bestiary {
      monsters
    }
  }
}`

function App() {
  const { setState } = useStore()
  useEffect(()=> {
    if (userData) {
      setState(oldState => ({
        ...oldState,
        user: user.Data.authenticate
      }))
    }
  }, [userData])

  return (
    <>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Auth isLogin={true} />}></Route>
              <Route path='/register' element={<Auth isLogin={false} />}></Route>
              <Route path='/profile' element={<Protect user={userData}>
                <Profile userData={userData} />
              </Protect>}></Route>
              <Route path='/user/:userId' element={<User />}></Route>

              <Route path='*' element={<NotFound />}></Route>
            </Routes>
    </>
  )
}

export default App
