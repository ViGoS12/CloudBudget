import './scss/app.scss'
import Header from './components/UI/header'
import Footer from './components/UI/footer'
import video from './assets/img/video_bg.jpg'
import btn from './assets/svg/triangleR_btn.svg'

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
      <main>
        <section className='info'>
          <div className='conteiner'>
            <div className='leftside'>
              <div className='info__title'>
                Easy to Use Cloud Budget Management Software
              </div>
              <div className='info__text'>
                Our software is made so you can access and manage your budget
                and expenses online at any time from any device. It provides
                detailed income and expense reports with graphs so you can
                easilly see your spending patterns and budget at a glance. Read
                below to find out more.
              </div>
              <button className='info__link'>Learn More</button>
            </div>
            <div className='rigthside'>
              <button className='info__btn'>
                <img src={btn} alt='video' />
              </button>
              <img className='info__img' src={video} alt='video' />
            </div>
          </div>
        </section>
        <section className='features'>
          <div className='conteiner'>
            <div className='features__title'>Features</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
