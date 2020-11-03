import { Card, CardActions, CardContent, CardMedia, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import AlertDialogSlide from './AlertDialogSlide'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

const FeaturesCards = () => {
  const classes = useStyles()
  const cards = [
    {
      title: 'une célébration privée',
      subTitle: 'Mariage, Communion, Anniversaire…',
      images: ['img/bd1.jpg', 'img/bd2.jpg', 'img/bd3.jpg', 'img/bd4.jpg', 'img/bd5.jpg', 'img/bd6.jpg', 'img/bd7.jpg', 'img/bd8.jpg'],
      mainImage: 'img/mainPriv.jpg'
    },

    {
      title: 'un événement professionnel',
      subTitle: 'séminaire, convention, cocktail,  afterwork, atelier culinaire…',
      images: ['img/pro1.jpg', 'img/pro2.jpg', 'img/pro3.jpg', 'img/pro4.jpg',
        'img/pro5.jpg', 'img/pro6.jpg', 'img/pro7.jpg', 'img/pro8.jpg', 'img/pro9.jpg', 'img/pro10.jpg'],
      mainImage: 'img/mainPro.jpg'
    }
  ]

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.title} xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.mainImage}
                title={card.title}
              />
              <CardContent className={classes.cardContent}>
                <h3>
                  {card.title}
                </h3>
                <p>
                  {card.subTitle}
                </p>
              </CardContent>
              <CardActions>
                <AlertDialogSlide images={card.images} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default FeaturesCards
