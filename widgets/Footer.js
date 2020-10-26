import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import RoomIcon from '@material-ui/icons/Room'
import PhoneIcon from '@material-ui/icons/Phone'

const Apropos = () => {
  return <div className="col-md-4 col-sm-12">
    <h1>A propos</h1>
    <p>Duis leo justo, condimentum at purus eu,Aenean sed dolor sem. Etiam massa libero, auctor vitae egestas et, accumsan quis nunc.Duis leo justo, condimentum at purus eu, posuere pretium tellus.</p>

  </div>
}

const Footer = () => {
  return (
    <section className="footer" style={{
      background: "url('img/bg3.png') no-repeat center",
      backgroundSize: 'cover'
    }}>
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
            <div className="footer-address">
              <p><RoomIcon /> 40 lot djnane Boursas les madeleines Hydra (côté Toyota) 16000 Algiers, Algeria</p>
              <p><PhoneIcon /> Phone: 0554 25 65 31</p>
            </div>
          </div>
        </div>
      </div>

    </section>

  )
}

export default Footer
