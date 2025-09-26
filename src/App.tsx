
import Header from './components/Header'
import Hero from './components/Hero'
import Slideshow from './components/Slideshow'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Slideshow />
        <Hero />
        <div className="container">
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
