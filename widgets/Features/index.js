import React from 'react'
import TextFont from '../../components/TextFont'
import SectionWithBg from '../../components/SectionWithBg'
import FeaturesCards from './FeaturesCards'

const Traiteur = () => {
  return <SectionWithBg bg='img/traiteur.jpg'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className="features-tile">

            <div className="features-content">
              <div className="page-header">
                <h2 style={{
                  color: '#fff',
                  fontSize: '65px'
                }}>Traiteur</h2>
              </div>
              <p style={{ color: '#fff' }}>
                <TextFont>Djenane Soltane since 2013</TextFont>,
                  vous propose des repas originaux qui s’adaptent à chacune de vos réceptions, en toutes occasions et en tous lieux.
                  Un buffet de qualité sera la meilleure façon de partager plus qu’un repas, un vrai moment de plaisir.
              </p>
              <p style={{ color: '#fff' }}>
                <TextFont>Pour une rencontre entre amis, </TextFont>
                  un cocktail dinatoire, pour votre mariage ou son lendemain …
              </p>
              <p style={{ color: '#fff' }}>
                <TextFont>Lors de vos réceptions professionnelles: </TextFont>
                  petit-déjeuner, brunch, accueil client, business lunch, pot de départ, repas annuel, vernissage, séminaire ...
              </p>
              <p style={{ color: '#fff' }}>
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
              <p>
                  Nous évaluons vos besoins selon vos attentes et établissons un devis précis (matériel, personnel).
              </p>
              <p>Nous organisons la livraison, la mise en place du matériel : tables nappage, verreries ...</p>
              <p>Nous assurons le service au buffet, les cuissons à la plancha,</p>
              <p>
                  Un menu spécial, un personnel qualifié, dans un lieu à l’image de vos envies,
                   une organisation avec les petits détails (son, lumière, décoration…),
                    la captation de votre événement, sont autant de difficultés que nous vous épargnons
                     en vous accompagnant avec nos partenaires dédiés dans toutes les phases de l’organisation de votre événement.
              </p>
            </div>
          </div>

        </div>
      </div>
      <FeaturesCards />
    </div>
  </section>
}

const Features = () => {
  return <>
    <Traiteur />
    <Evenements />
  </>
}

export default Features
