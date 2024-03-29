import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@/components/Home'
import PageTitle from '@/components/PageTitle'
import Loader from '@/components/Loader'
import Profile from '@/components/Profile'

function App() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <>
          <Route
            path="/"
            element={
              <>
                <PageTitle title="Home" />
                <Home />
              </>
            }
          />
          <Route
            path="profile"
            element={
              <>
                <PageTitle title="Profile" />
                <Profile />
              </>
            }
          />
        </>
      </Routes>
    </>
  )
}

export default App
