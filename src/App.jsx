import Comments from "./components/comments"
import Footer from "./components/footer"
import Header from "./components/header"
import Hero from "./components/hero"
import Middle from "./components/middle"


function App() {

  return (
    <>
      <div className="main bg-[#111826] w-full h-full md:px-[108px] max-md:px-[55px] pt-11 text-white overflow-hidden">
        <Header />
        <Hero />
        <Middle />
        <Comments />
        <img src="assets/bg1.png" alt="" />
      </div>
      <Footer />
    </>
  )
}

export default App
