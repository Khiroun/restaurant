import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import RoomIcon from '@material-ui/icons/Room'
import PhoneIcon from '@material-ui/icons/Phone'
import SectionWithBg from '../components/SectionWithBg'

const Apropos = () => {
  return <div className="col-md-4 col-sm-12">
    <h1>A propos</h1>
    <p>le restaurant Djenane Sultane since 2013 , Snack , resto , café est situé à Hydra il est parmi les meilleurs restaurants qui rassemble entre le traditionnel et l’algérien . Vous passerez un agréable moment dans une salle à la décoration orientale et vous avez le choix entre une salle resto ou kaada</p>

  </div>
}

const Footer = () => {
  return (
    <SectionWithBg className="footer" bg='img/bg3.jpg'>
      <div className="container">
        <div className="row">
          <Apropos />
          <div className="col-md-4  col-sm-6">

          </div>
          <div className="col-md-4  col-sm-6">
            <h1>rejoignez nous</h1>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/Djenanesultan/">
                <FacebookIcon />
              </a>

            </div>
            <div className="footer-address" style={{
              backgroundColor: 'rgba(255,255,255,0.1)'
            }}>
              <p style={{ color: 'white' }}><RoomIcon /> 40 lot djnane Boursas les madeleines Hydra (côté Toyota) 16000 Algiers, Algeria</p>
              <p style={{ color: 'white' }}><PhoneIcon /> Phone: 0554 25 65 31</p>
            </div>
          </div>
        </div>
      </div>

    </SectionWithBg>

  )
}

export default Footer
