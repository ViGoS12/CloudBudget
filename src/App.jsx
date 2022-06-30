import './scss/app.scss'
import Header from './components/UI/header'
import Footer from './components/UI/footer'

import main_slider_img from './assets/img/slider_image1.jpg'
import back_slider_img1 from './assets/img/slider_image2.jpg'
import back_slider_img2 from './assets/img/slider_image3.jpg'
import feature1 from './assets/img/features1.jpg'
import feature2 from './assets/img/features2.jpg'
import feature3 from './assets/img/features3.jpg'
import video from './assets/img/video_bg.jpg'

import secure from './assets/svg/secure.svg'
import cloud from './assets/svg/cloud.svg'
import pdf from './assets/svg/pdf.svg'
import csv from './assets/svg/csv.svg'
import triangle_btn from './assets/svg/triangleR_btn.svg'
import googleplay from './assets/svg/google-play.svg'
import select_btn from './assets/svg/select_btn.svg'
import appstore from './assets/svg/appstore.svg'
import windows from './assets/svg/windows.svg'

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
            <div className='info__leftside'>
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
            <div className='info__rightside'>
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
        <section className='download'>
          <div className='container'>
            <div className='download__leftside'>
              <div className='download__title'>
                Stay focused on saving money
              </div>
              <div className='download__text'>
                It is important to stay focused on saving money in any way you
                can. We help you monitor your spending habits so you can easily
                spot and cut any unnecessary expenses. Simply join today to get
                started!
              </div>
              <div className='download__block_btn'>
                <img src={googleplay} alt='' className='download__store_btn' />
                <img src={appstore} alt='' className='download__store_btn' />
                <img src={windows} alt='' className='download__store_btn' />
              </div>
            </div>
            <div className='download__rightside'>
              <img src={main_slider_img} alt='' className='download__img' />
              <img
                src={back_slider_img1}
                alt=''
                className='download__img_back1'
              />
              <img
                src={back_slider_img2}
                alt=''
                className='download__img_back2'
              />
            </div>
          </div>
        </section>
        <section className='contact'>
          <div className='container'>
            <div className='contact__leftside'>
              <div className='contact__title'>Contact</div>
              <div className='contact__text'>
                Questions or concerns? Just fill out the form below and our
                support team will get back to you within 24 hours
              </div>
            </div>
            <div className='contact__rightside'>
              <div className='contact__fullname'>
                <input
                  className='contact__name'
                  type='text'
                  placeholder='First Name'
                />
                <input
                  className='contact__name'
                  type='text'
                  placeholder='Last Name'
                />
              </div>
              <input
                className='contact__phone'
                type='num'
                placeholder='Phone Number'
              />
              <div className='contact__select'>
                <select className='contact__service' name='select'>
                  <option value='1'>Select Service</option>
                </select>
                <img src={select_btn} alt='' className='contact__select_svg' />
              </div>
              <button className='contact__btn'>Submit Now</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
