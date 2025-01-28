import './App.css'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Home from './sections/Home'

function App() {

  return (
    <main className='overflow-hidden hide-scrollbar'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
