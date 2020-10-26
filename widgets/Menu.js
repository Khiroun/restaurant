import React, { useState } from 'react'

const MenuItem = ({ title }) => {
  return <div className="menu-item col-sm-6 col-xs-12 starter dinner desserts">
    <div className="clearfix menu-wrapper">
      <h4>{title}</h4>

    </div>
  </div>
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
    { title: 'Chetitha Poulet' }, { title: 'Chetitha Zellif' }, { title: 'Bekbouka' },
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
  const [menu, setMenu] = useState('EC')
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
              <div className="menu-tags">
                <span data-filter="*" className={menu === 'EC' ? 'tagsort-active' : ''} onClick={() => { setMenu('EC') }}>Entrées Chaudes</span>
                <span data-filter=".starter" className={menu === 'EF' ? 'tagsort-active' : ''} onClick={() => { setMenu('EF') }}>Entrées Froides</span>
                <span data-filter=".breakfast" className={menu === 'PL' ? 'tagsort-active' : ''} onClick={() => { setMenu('PL') }}>Plats</span>
                <span data-filter=".desserts" className={menu === 'AC' ? 'tagsort-active' : ''} onClick={() => { setMenu('AC') }}>Accompagnements</span>
                <span data-filter=".lunch" className={menu === 'BF' ? 'tagsort-active' : ''} onClick={() => { setMenu('BF') }}>Boissons Fraiches</span>
                <span data-filter=".dinner" className={menu === 'BC' ? 'tagsort-active' : ''} onClick={() => { setMenu('BC') }}>Boissons Chaudes</span>
                <span data-filter=".desserts" className={menu === 'DE' ? 'tagsort-active' : ''} onClick={() => { setMenu('DE') }}>Desserts</span>
                <span data-filter=".desserts" className={menu === 'TA' ? 'tagsort-active' : ''} onClick={() => { setMenu('TA') }}>Tadjine</span>
                <span data-filter=".desserts" className={menu === 'PO' ? 'tagsort-active' : ''} onClick={() => { setMenu('PO') }}>Poisson</span>
              </div>
            </div>
          </div>
          {
            menu === 'EC' && <EntreesChaudes />
          }
          {
            menu === 'EF' && <EntreesFroides />
          }{
            menu === 'PL' && <Plats />
          }{
            menu === 'BF' && <BoissonsFraiches />
          }{
            menu === 'BC' && <BoissonsChaudes />
          }{
            menu === 'DE' && <Desserts />
          }
          {
            menu === 'AC' && <Accompagnements />
          }{
            menu === 'TA' && <Tadjine />
          }{
            menu === 'PO' && <Poisson />
          }
        </div>
      </div>
    </section>

  )
}

export default Menu
