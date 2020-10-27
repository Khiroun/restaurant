import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import Gallerie from '../Gallerie'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AlertDialogSlide () {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{width: '100%'}}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{width: '100%'}}>
        Gallerie
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth='100%'
      >
        <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
        <DialogContent>
          <Gallerie images={['img/gallerie/1.jpg', 'img/gallerie/2.jpg', 'img/gallerie/3.jpg', 'img/gallerie/4.jpg', 'img/gallerie/5.jpg']} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
