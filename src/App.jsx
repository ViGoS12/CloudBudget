import './scss/app.scss'
import Header from './components/UI/header'
import Footer from './components/UI/footer'

function App() {
  return (
    <div>
      <section className='top'>
        <div className='top__img'>
          <div className='top__gradient'>
            <Header />
            <div className='top__title'>Cloudbudget</div>
            <div className='top__text'>
              Cloud budget management for everyone. Only €69.95 a Month After a
              7 Day Trial of Up to €4.99
            </div>
            <button className='top__btn'>Sign up</button>
          </div>
        </div>
      </section>
      <main>Main</main>
      <Footer />
    </div>
  )
}

export default App
