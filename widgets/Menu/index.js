import React, { useState } from 'react'
import Proptypes from 'prop-types'
import MUIMenu from '@material-ui/core/Menu'
import DropDownMenuItem from './DropDownMenuItem'

const Heading4 = ({ children }) => {
  return <h4 style={{ textAlign: 'center', width: '100%' }}>{children}</h4>
}

Heading4.propTypes = {
  children: Proptypes.node
}

const MenuItem = ({ title }) => {
  return <div className="menu-item col-sm-6 col-xs-12 starter dinner desserts">
    <div className="clearfix menu-wrapper">
      <Heading4>{title}</Heading4>

    </div>
  </div>
}

MenuItem.propTypes = {
  title: Proptypes.string
}

const EntreesChaudes = () => {
  const items = [{ title: 'Bourek' }, { title: 'Brik' }, { title: 'Omelette au choix' }, { title: 'Soupe de poulet' }, { title: 'Chorba Frik' }]
  return <div className="row menu-items">
    {
      items.map((item) => {
        return <MenuItem key={item.title} title={item.title} />
      })
    }

  </div>
}

const EntreesFroides = () => {
  const items = [{ title: 'Salé' }, { title: 'Salade Berbère' }, { title: 'Salade Variée' }, { title: 'Salade de Pate' }, { title: 'Salade Oumek Houria' }, { title: 'Salade Mixte' }]
  return <div className="row menu-items">
    {
      items.map((item) => {
        return <MenuItem key={item.title} title={item.title} />
      })
    }

  </div>
}

const Entrees = () => {
  return <div className='row'>
    <div className='col-md-6 col-sm-12'>
      <h2>Entrées Chaudes</h2>
      <EntreesChaudes />
    </div>
    <div className='col-md-6 col-sm-12'>
      <h2>Entrées Froides</h2>
      <EntreesFroides />
    </div>
  </div>
}

const Plats = () => {
  const items = [{ title: 'Escalope Grillée' }, { title: 'Sardine' }, { title: 'Poulet farci' }, { title: 'Mtouèm' },
    { title: 'Adjaa Merguez' }, { title: 'Brochettes Mixte' }, { title: 'Paella' }, { title: 'Tadin Légumes et épinards' },
    { title: 'Poulet Mariné' }, { title: 'Chekhchokha' }, { title: 'Rechta Algéroise' }, { title: 'Entrecôte' },
    { title: 'Poulet Roti' }, { title: 'Couscous Algerien' }, { title: 'Couscous Tunisien' }, { title: 'Tlitli' }, { title: 'Spagetti aux Fruits de mer' }]
  return <div className="row menu-items">
    {
      items.map((item) => {
        return <MenuItem key={item.title} title={item.title} />
      })
    }

  </div>
}
const Accompagnements = () => {
  const items = [{ title: 'Bourghol' }, { title: 'Légumes a la Vapeur' }, { title: 'Légumes Sautés' }, { title: 'Frites' },
    { title: 'Riz' }, { title: "Gratin d'épinards" }]
  return <div className="row menu-items">
    {
      items.map((item) => {
        return <MenuItem key={item.title} title={item.title} />
      })
    }

  </div>
}

const PlatsEtAccompagnements = () => {
  return <div className='row'>
    <div className='col-md-6 col-sm-12' >
      <h2>Plats</h2>
      <Plats />
    </div>
    <div className='col-md-6 col-sm-12' >
      <h2>Accompagnements</h2>
      <Accompagnements />
    </div>
  </div>
}

const BoissonsFraiches = () => {
  const items = [{ title: 'RedBull' }, { title: 'Cocktail de Fruits' }, { title: 'Milkshake Baname/Fraise' }, { title: 'Mojito' }, { title: "Jus d'orange/Citron" }, { title: 'Boissons 1 L' }, { title: 'Vichy 1 L' }, { title: 'Rauch' }, { title: 'Soft Drink (Canettes)' }, { title: 'Smoothie' }]
  return <div className="row menu-items">
    {
      items.map((item) => {
        return <MenuItem key={item.title} title={item.title} />
      })
    }

  </div>
}

const BoissonsChaudes = () => {
  const items = [{ title: 'Cappucino' }, { title: 'Nespresso' }, { title: 'Illy' }, { title: 'Café au lait' }, { title: 'Lait Chaud' }, { title: 'Chocolat Chaud' }, { title: 'Thé Maison' }, { title: 'Thé Infusion' }, { title: 'Tisane' }]
  return <div className="row menu-items">
    {
      items.map((item) => {
        return <MenuItem key={item.title} title={item.title} />
      })
    }

  </div>
}

const Boissons = () => {
  return <div className='row'>
    <div className='col-md-6 col-sm-12' >
      <h2>Boissons Fraiches</h2>
      <BoissonsFraiches />
    </div>
    <div className='col-md-6 col-sm-12' >
      <h2>Boissons Chaudes</h2>
      <BoissonsChaudes />
    </div>
  </div>
}

const Desserts = () => {
  const items = [{ title: 'Salade de Fruits' }, { title: 'Tartes' }, { title: 'Gateaux' }, { title: 'Tiramisu' }, { title: 'Mousse au Chocolat' }, { title: 'Moukassirat' }]
  return <div className="row menu-items">
    {
      items.map((item) => {
        return <MenuItem key={item.title} title={item.title} />
      })
    }

  </div>
}

const Tadjine = () => {
  const items = [{ title: 'Tadjine Zitoun' }, { title: 'Tadjine El Djben' }, { title: "M'touem" }, { title: 'Chetitha Viande' },
    { title: 'Chetitha Poulet' }, { title: 'Bekbouka' },
    { title: 'Kbeb' }, { title: 'Chetitha Zellif' }]
  return <div className="row menu-items">
    {
      items.map((item) => {
        return <MenuItem key={item.title} title={item.title} />
      })
    }

  </div>
}

const Poisson = () => {
  const items = [{ title: 'Chetitha Serdine' }, { title: 'Sardine' }, { title: 'Calamar farci' }, { title: 'Crevette en sauce' },
    { title: 'Sepia en sauce' }, { title: 'Paella' }
  ]
  return <div className="row menu-items">
    {
      items.map((item) => {
        return <MenuItem key={item.title} title={item.title} />
      })
    }

  </div>
}

const Menu = () => {
  const [menu, setMenu] = useState('PO')
  const EntreesDropDown = ({ selected }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }
    console.log({ selected })
    return (
      <>
        <span aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={selected ? 'tagsort-active' : ''}>
        Entrées
        </span>
        <MUIMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div className='menu-tags' style={{ display: 'flex', flexDirection: 'column' }}>
            <span onClick={() => { setMenu('EC') }}>Entrées Chaudes</span>
            <span onClick={() => { setMenu('EF') }}>Entrées Froides</span>
          </div>
        </MUIMenu>
      </>
    )
  }

  const PADropDown = ({ selected }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }
    console.log({ selected })
    return (
      <>
        <span aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={selected ? 'tagsort-active' : ''}>
        Plats Et Accompagnements
        </span>
        <MUIMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div className='menu-tags' style={{ display: 'flex', flexDirection: 'column' }}>
            <span onClick={() => { setMenu('PL') }}>Plats</span>
            <span onClick={() => { setMenu('AC') }}>Accompagnements</span>
          </div>
        </MUIMenu>
      </>
    )
  }

  const BoissonsDropDown = ({ selected }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }
    console.log({ selected })
    return (
      <>
        <span aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={selected ? 'tagsort-active' : ''}>
        Boissons
        </span>
        <MUIMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div className='menu-tags' style={{ display: 'flex', flexDirection: 'column' }}>
            <span onClick={() => { setMenu('BC') }}>Boissons Chaudes</span>
            <span onClick={() => { setMenu('BF') }}>Boissons Fraiches</span>
          </div>
        </MUIMenu>
      </>
    )
  }

  return (
    <section className="menu">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header wow fadeInDown">
              <h1>Notre menu</h1>
            </div>
          </div>
        </div>
        <div className="food-menu wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <div className="menu-tags" style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
              }}>
                {<EntreesDropDown selected={menu === 'EC' || menu === 'EF'} />}
                {<PADropDown selected={menu === 'PL' || menu === 'AC'} />}
                {<BoissonsDropDown selected={menu === 'BC' || menu === 'BF'} />}
                {
                  // <span data-filter=".desserts" className={menu === 'EN' ? 'tagsort-active' : ''} onClick={() => { setMenu('EN') }}>Entrées</span>
                }
                {/* <DropDownMenuItem title='Entrées' selected={menu === 'EC' || menu === 'EF'} renderItems={()=>{
                    return <><span onClick={() => { setMenu('EC') }}>Entrées Chaudes</span>
            <span onClick={() => { setMenu('EF') }}>Entrées Froides</span></>
                }} /> */}
                {/*<span data-filter=".breakfast" className={menu === 'PA' ? 'tagsort-active' : ''} onClick={() => { setMenu('PA') }}>Plats et Accompagnements</span>*/}
                {/*<span data-filter=".breakfast" className={menu === 'BO' ? 'tagsort-active' : ''} onClick={() => { setMenu('BO') }}>Boissons</span>*/}
                <span data-filter=".desserts" className={menu === 'DE' ? 'tagsort-active' : ''} onClick={() => { setMenu('DE') }}>Desserts</span>
                <span data-filter=".desserts" className={menu === 'TA' ? 'tagsort-active' : ''} onClick={() => { setMenu('TA') }}>Tadjine</span>
                <span data-filter=".desserts" className={menu === 'PO' ? 'tagsort-active' : ''} onClick={() => { setMenu('PO') }}>Poisson</span>
              </div>
            </div>
          </div>
          {
            menu === 'DE' && <Desserts />
          }
          {
            menu === 'TA' && <Tadjine />
          }{
            menu === 'PO' && <Poisson />
          }{
            menu === 'EN' && <Entrees />
          }{
            menu === 'PA' && <PlatsEtAccompagnements />
          }
          {
            menu === 'BO' && <Boissons />
          }
          {
            menu === 'EC' && <EntreesChaudes />
          }{
            menu === 'EF' && <EntreesFroides />
          }
          {
            menu === 'PL' && <Plats />
          }{
            menu === 'AC' && <Accompagnements />
          }
          {
            menu === 'BC' && <BoissonsChaudes />
          }
          {
            menu === 'BF' && <BoissonsFraiches />
          }
        </div>
      </div>
    </section>

  )
}

export default Menu
