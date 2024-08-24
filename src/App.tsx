import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./provider/Home/Home"
import Error_page from "./provider/Error/Error_page"
import Characters from "./provider/Characters/Characters"
import { Suspense } from "react"

function App() {

  return (
    <div style={{ display: "grid", gridTemplateRows: "auto 1fr" }}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="*" element={<Error_page />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
