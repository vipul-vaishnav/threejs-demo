import { Route, BrowserRouter, Routes } from 'react-router-dom'

// import Navbar from './components/Navbar'

import Home from './views/Home'

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<>About</>} />
          <Route path="/projects" element={<>About</>} />
          <Route path="/contact" element={<>About</>} />
          <Route path="*" element={<>404 go back home | Not Found</>} />
          <Route />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
