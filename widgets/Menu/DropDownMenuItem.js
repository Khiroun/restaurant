import Menu from '@material-ui/core/Menu'
import React from 'react'

const DropDownMenuItem = ({ title, selected, renderItems, open, setOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  return (
    <>
      <span aria-controls="simple-menu" aria-haspopup="true" onClick={setOpen(true)} className={selected ? 'tagsort-active' : ''}>
        {title}
      </span>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
      >
        <div className='menu-tags' style={{ display: 'flex', flexDirection: 'column' }}>
          {renderItems()}
        </div>
      </Menu>
    </>
  )
}

export default DropDownMenuItem
