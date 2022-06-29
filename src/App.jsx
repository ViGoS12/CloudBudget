import './scss/app.scss'
import Header from './components/UI/header'
import Footer from './components/UI/footer'
import video from './assets/img/video_bg.jpg'
import triangle_btn from './assets/svg/triangleR_btn.svg'
import feature1 from './assets/img/features1.jpg'
import feature2 from './assets/img/features2.jpg'
import feature3 from './assets/img/features3.jpg'
import cloud from './assets/svg/cloud.svg'
import secure from './assets/svg/secure.svg'
import pdf from './assets/svg/pdf.svg'
import csv from './assets/svg/csv.svg'

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
          <div className='container'>
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
                <img src={triangle_btn} alt='video' />
              </button>
              <img className='info__img' src={video} alt='video' />
            </div>
          </div>
        </section>
        <section className='features'>
          <div className='features__title'>Features</div>
          <div className='container'>
            <div className='features__block'>
              <img src={feature1} alt='' className='features__img' />
              <div className='features__description'>
                <div className='features__title_desc'>
                  Supports All Currencies and Cards
                </div>
                <div className='features__text'>
                  We support all popular currencies and is fully customizable to
                  add
                </div>
                <div className='features__link'>Read More</div>
              </div>
            </div>
            <div className='features__block'>
              <img src={feature2} alt='' className='features__img' />
              <div className='features__description'>
                <div className='features__title_desc'>
                  Manage your expenses on the go
                </div>
                <div className='features__text'>
                  You can access your account from anywhere in the world on any
                  device
                </div>
                <div className='features__link'>Read More</div>
              </div>
            </div>
            <div className='features__block'>
              <img src={feature3} alt='' className='features__img' />
              <div className='features__description'>
                <div className='features__title_desc'>
                  Cloud Budget Management Software
                </div>
                <div className='features__text'>
                  Our software is made so you can access and manage your budget
                </div>
                <div className='features__link'>Read More</div>
              </div>
            </div>
          </div>
        </section>
        <section className='technology'>
          <div className='technology__main_title'>Technology</div>
          <div className='container'>
            <div className='technology__block'>
              <div className='technology__text'>01</div>
              <img
                src={cloud}
                alt=''
                className='technology__icon icon_cloud'></img>
              <div className='technology__title'>Cloud Storage</div>
              <div className='techonology__subtitle'>
                Access your account from anywhere in the world on any device
              </div>
            </div>
            <div className='technology__block'>
              <div className='technology__text'>02</div>
              <img
                src={secure}
                alt=''
                className='technology__icon icon_secure'></img>
              <div className='technology__title'>Secure</div>
              <div className='techonology__subtitle'>
                All your information is stored on secure cloud servers
              </div>
            </div>
            <div className='technology__block'>
              <div className='technology__text'>03</div>
              <img src={pdf} alt='' className='technology__icon icon_pdf'></img>
              <div className='technology__title'>PDF Download</div>
              <div className='techonology__subtitle'>
                Download any of your reports in PDF format
              </div>
            </div>
            <div className='technology__block'>
              <div className='technology__text'>04</div>
              <img src={csv} alt='' className='technology__icon icon_csv'></img>
              <div className='technology__title'>CSV Download</div>
              <div className='techonology__subtitle'>
                All your information is stored on secure cloud servers
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
