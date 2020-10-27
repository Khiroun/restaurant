import React from 'react'
import { Link } from 'react-scroll'
import Footer from '../widgets/Footer'
import Gallerie from '../widgets/Gallerie'
import Menu from '../widgets/Menu'

const index = () => {
  return (
    <div>

      <div className="body">
        <div className="main-wrapper">
          {/** Navbar */}
          <section className="home" style={{
            background: "url('img/bg4.png') no-repeat center center",
            backgroundSize: 'cover'
          }}>
            <div className="tittle-block">
              <div className="logo">
                <a href="./index.html">
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
          </section>
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
                      le restaurant <span style={{ fontFamily: 'Great Vibes', fontSize: '3.5rem' }}>Djenane Sultane since 2013</span>  , Snack , resto , café est situé à Hydra il est parmi les meilleurs restaurants qui rassemble entre le traditionnel et l’algérien .

 Vous passerez un agréable moment dans une salle à la décoration orientale et vous avez le choix entre une salle resto ou kaada.

Une cuisine traditionnelle et succulente qui vous mène à travers le temps et qui vous fait rappeler les meilleurs moments oculaires de votre vie, , des entrées froides et chaudes , plats gastronomiques ou traditionnels ,gâteaux et desserts , sont composés nos menus.

L'établissement assure aussi le service snack et café pour les pauses ou after work.

                  </p>
                  <br />
                  <p>
                      Son staff chaleureux et aux petits soins vous assure un service professionnel, vous accueille dans une ambiance orientale, en vous offrant des moments inoubliables.

                    <br/>
                    <span style={{ fontFamily: 'Great Vibes', fontSize: '3.5rem' }}>Djenane Sultane</span> vous invite à passer d'agréables moments sur les banquettes dans la salle aux couleurs ravissantes  en écoutant Tarab  et Découvrir la gastronomie algérienne et la variété de ses plat
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="features">
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-md-4 col-sm-6">
                  <div className="features-tile">
                    <div className="features-img">
                      <img src="img/thumb5.png" alt="" />
                    </div>
                    <div className="features-content">
                      <div className="page-header">
                        <h1>Restauration</h1>
                      </div>
                      <p>Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel ullamcorper turpis varius eu.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="features-tile">
                    <div className="features-img">
                      <img src="img/thumb6.png" alt="" />
                    </div>
                    <div className="features-content">
                      <div className="page-header">
                        <h1>Traiteur</h1>
                      </div>
                      <p>Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel ullamcorper turpis varius eu.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="features-tile">
                    <div className="features-img">
                      <img src="img/thumb7.png" alt="" />
                    </div>
                    <div className="features-content">
                      <div className="page-header">
                        <h1>Evènements</h1>
                      </div>
                      <p>Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel ullamcorper turpis varius eu.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 visible-sm">
                  <div className="features-tile">
                    <div className="features-img">
                      <img src="img/thumb5.png" alt="" />
                    </div>
                    <div className="features-content">
                      <div className="page-header">
                        <h1>Serving with love</h1>
                      </div>
                      <p>Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel ullamcorper turpis varius eu.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Menu />
          <section className="instagram">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-header wow fadeInDown">
                    <h1>Gallerie<small>Nous aimons publier des photos de nos clients en train de passer un bon moment</small></h1>
                  </div>
                  <Gallerie />
                </div>
              </div>
            </div>
            <div id="instafeed" data-username="instaphotosdemo" data-access-token="3401121086.ca9c5d8.49a154f2d6034846ae4e37962de804e8" data-client-id="a42e80c86661419b94a5ac01dc022221">
            </div>
          </section>
          <Footer />
        </div>
      </div>
      <div className="b-settings-panel">
        <div className="settings-section">
          <span>
              Boxed
          </span>
          <div className="b-switch">
            <div className="switch-handle" />
          </div>
          <span>
              Wide
          </span>
        </div>
        <hr className="dashed" style={{ margin: '15px 0px' }} />
        <h5>Main Background</h5>
        <div className="settings-section bg-list">
          <div className="bg-wood_pattern" />
          <div className="bg-shattered" />
          <div className="bg-vichy" />
          <div className="bg-random-grey-variations" />
          <div className="bg-irongrip" />
          <div className="bg-gplaypattern" />
          <div className="bg-diamond_upholstery" />
          <div className="bg-denim" />
          <div className="bg-crissXcross" />
          <div className="bg-climpek" />
        </div>
        <hr className="dashed" style={{ margin: '15px 0px' }} />
        <h5>Color Scheme</h5>
        <div className="settings-section color-list">
          <div data-src="css/themes/blue.css" style={{ background: '#45b5f5' }} />
          <div data-src="css/themes/brown.css" style={{ background: '#dc8068' }} />
          <div data-src="css/themes/cyan.css" style={{ background: '#00becc' }} />
          <div data-src="css/themes/green.css" style={{ background: '#5bb75b' }} />
          <div data-src="css/themes/orange.css" style={{ background: '#ff7149' }} />
          <div data-src="css/themes/pink.css" style={{ background: '#fba1a1' }} />
          <div data-src="css/themes/red.css" style={{ background: '#dc3522' }} />
          <div data-src="css/themes/yellow.css" style={{ background: '#fdb813' }} />
        </div>
        <a data-src="css/style.css" className="reset"><span className="bg-wood_pattern">Reset</span></a>
      </div>
    </div>

  )
}

export default index
