import { Route, Routes } from 'react-router-dom'
import { Footer, Header, HeaderBanner, Home, Login, Register, ScrollUp } from './components'

const App = () => {
  return (
    <>
      <HeaderBanner />
      <Header />
      

      <main className="mt-[3rem] md:mt-[3rem]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </main>

      <ScrollUp />
      <Footer />
    </>
  )
}

export default App