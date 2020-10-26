import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  header: {
    minHeight: '100vh',
    backgroundImage: 'url("img/hero.jpg")',
    background: 'center/cover no-repeat fixed',
    marginTop: 'auto'
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%'
  },
  title: {
    color: '#fff',
    fontSize: '50px',
    fontFamily: 'Playball'
  },
  heroButton: {
    display: 'inline-block',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '20px 13px',
    borderRadius: '200px',
    fontWeight: 'bold',
    backgroundColor: 'orange',
    color: '#fff',
    cursor: 'pointer',
    border: '2px solid orange',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: '#fff',
      color: 'orange',
      border: 'none'
    }
  },
  pulsate: {
    animation: 'pulsate 3s ease-in-out',
    animationIterationCount: 'infinit',
    opacity: 0.3,
    color: '#000'

  },
  '& @-webkit-keyframes pulsate': {
    '& 0%': {
      opacity: 0.3
    },
    '& 50%': {
      opacity: 1
    },
    '& 100%': {
      opacity: 0.3
    }
  }
}))

const Header = () => {
  const styles = useStyles()
  return (
    <header className={styles.header}>
      <div className={styles.hero}>
        <h1 className={styles.title} >Djenane Sultan</h1>
        <Link href='/'>
          <a className={`${styles.heroButton} ${styles.pulsate}`}>Réservez une table</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
