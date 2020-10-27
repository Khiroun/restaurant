import React from 'react'
import TextFont from '../components/TextFont'
import SectionWithBg from '../components/SectionWithBg'

const Traiteur = () => {
  return <SectionWithBg bg='img/bg2.png'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
      <div className="features-tile">
            
            <div className="features-content">
              <div className="page-header">
                <h2 style={{color: '#fff',
    fontSize: '65px'}}>Traiteur</h2>
              </div>
              <p style={{color: '#fff'}}>
                  <TextFont>Djenane Soltane since 2013</TextFont>, 
                  vous propose des repas originaux qui s’adaptent à chacune de vos réceptions, en toutes occasions et en tous lieux. 
                  Un buffet de qualité sera la meilleure façon de partager plus qu’un repas, un vrai moment de plaisir.
              </p>
              <p style={{color: '#fff'}}>
                  <TextFont>Pour une rencontre entre amis, </TextFont>
                  un cocktail dinatoire, pour votre mariage ou son lendemain …
              </p>
              <p style={{color: '#fff'}}>
                  <TextFont>Lors de vos réceptions professionnelles: </TextFont>
                  petit-déjeuner, brunch, accueil client, business lunch, pot de départ, repas annuel, vernissage, séminaire ...
              </p>
              <p style={{color: '#fff'}}>
                  A l’occasion de chaque événement nécessitant un repas, catering, pic-nic, sandwichs froids ou chauds, des buffets de tout type.
              </p>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  </SectionWithBg>
}

const Evenements = () => {
  return <section>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className="features-tile">
            <div className="features-content">
              <div className="page-header">
                <h1>Evènements</h1>
              </div>
              <p>Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque enim. Aliquam tempor fringilla odio, vel ullamcorper turpis varius eu.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
}

const Features = () => {
  return <>
    <Traiteur />
    <Evenements />
  </>
}

const Features1 = () => {
  return (
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
        </div>
      </div>
    </section>
  )
}

export default Features
