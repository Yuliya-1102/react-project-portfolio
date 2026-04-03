import { Header, Footer, About, OurClients, Contact, Home, Portfolio, GetInTouch, Serviceses, SkillsInfo, ScrollToTop, ThemeToggle} from "./components/index"

function App() {

  return (
    <>
      <Header/>
        <main>
          <Home />
          <About />
          <SkillsInfo />
          <Serviceses />          
          <Portfolio />
          <GetInTouch />
          <OurClients/>          
          <Contact />          
        </main>      
      <Footer/>
      <ScrollToTop/>
      <ThemeToggle/>
    </>
  )
}

export default App
