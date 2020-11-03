import React from 'react'
import { Link } from 'react-scroll'
import SectionWithBg from '../components/SectionWithBg'
import TextFont from '../components/TextFont'
import Features from '../widgets/Features'
import Footer from '../widgets/Footer'
import Gallerie from '../widgets/Gallerie'
import Menu from '../widgets/Menu'

const index = () => {
  const images = ['img/gallerie/1.jpg', 'img/gallerie/2.jpg', 'img/gallerie/3.jpg', 'img/gallerie/4.jpg', 'img/gallerie/5.jpg',
    'img/gallerie/6.jpg', 'img/gallerie/7.jpg', 'img/gallerie/8.jpg', 'img/gallerie/9.jpg', 'img/gallerie/10.jpg', 'img/gallerie/11.jpg',
    'img/gallerie/12.jpg']
  return (
    <div>

      <div className="body">
        <div className="main-wrapper">
          {/** Navbar */}
          <SectionWithBg bg='img/bg4.png' className='home'>
            <div className="tittle-block">
              <div className="logo">
                <a href="/">
                  <img src="img/logo1.png" alt="logo" width='25%' />
                </a>
              </div>
              <h1>Resto Snack Café</h1>
              <h2></h2>
            </div>
            <div className="scroll-down hidden-xs">
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={1500} >
                <img src="img/arrow-down.png" alt="down-arrow" />

              </Link>

            </div>
          </SectionWithBg>
          <section className="about" id="about">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-header wow fadeInDown">
                    <h1>Djenane Sultan<small>Resto Snack Café</small></h1>
                  </div>
                </div>
              </div>
              <div className="row wow fadeInUp">
                <div className="col-md-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 hidden-sm about-photo">
                        <div className="image-thumb">
                          <img src="img/gallerie/2.jpg" className="img-responsive" alt="logo" style={{ maxHeight: '400px' }} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-8">
                  <p>
                      le restaurant <TextFont>Djenane Sultane since 2013</TextFont>  , Snack , resto , café est situé à Hydra il est parmi les meilleurs restaurants qui rassemble entre le traditionnel et l’algérien .

 Vous passerez un agréable moment dans une salle à la décoration orientale et vous avez le choix entre une salle resto ou kaada.

Une cuisine traditionnelle et succulente qui vous mène à travers le temps et qui vous fait rappeler les meilleurs moments oculaires de votre vie, , des entrées froides et chaudes , plats gastronomiques ou traditionnels ,gâteaux et desserts , sont composés nos menus.

L&apos;établissement assure aussi le service snack et café pour les pauses ou after work.

                  </p>
                  <br />
                  <p>
                      Son staff chaleureux et aux petits soins vous assure un service professionnel, vous accueille dans une ambiance orientale, en vous offrant des moments inoubliables.

                    <br/>
                    <TextFont>Djenane Sultane</TextFont> vous invite à passer d&apos;agréables moments sur les banquettes dans la salle aux couleurs ravissantes  en écoutant Tarab  et Découvrir la gastronomie algérienne et la variété de ses plat
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Features />
          <Menu />
          <section className="instagram">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-header wow fadeInDown">
                    <h1>Gallerie<small>Nous aimons publier des photos de nos clients en train de passer un bon moment</small></h1>
                  </div>
                  <Gallerie images={images} />
                </div>
              </div>
            </div>
            <div id="instafeed" data-username="instaphotosdemo" data-access-token="3401121086.ca9c5d8.49a154f2d6034846ae4e37962de804e8" data-client-id="a42e80c86661419b94a5ac01dc022221">
            </div>
          </section>
          <Footer />
        </div>
      </div>

    </div>

  )
}

export default index
