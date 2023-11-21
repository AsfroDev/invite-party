import { useState, useEffect } from 'react'

import MenuIconOpened from './assets/menu-icon-opened.png'
import MenuIconClosed from './assets/menu-icon-closed.png'

import { Home } from './pages/Home.jsx'
import { Help } from './pages/Help.jsx'
import { About } from './pages/About.jsx'
import { Confirmation } from './pages/Confirmation.jsx'
import { ThankYou } from './pages/Thankyou.jsx'

import './App.css'

function App() {

  //Header Menu
  const [SidebarOpens, setSidebarOpens] = useState(false);
  const [menu, setMenu] = useState(MenuIconClosed);
  const [menuArea, setmenuArea] = useState('MenuOptionsClosed');
  const [menuIconWidht, setmenuIconWidht] = useState('MenuIconBtnClosed');

  const openHandler = () => {

    if (!SidebarOpens) {
      setSidebarOpens(true);
      setMenu(MenuIconOpened);
      setmenuArea('MenuOptionsOpened')
      setmenuIconWidht('MenuIconBtnOpened')
    } else {
      closeMenu();
    }
  };

  const closeMenu = () => {
    setSidebarOpens(false);
    setMenu(MenuIconClosed)
    setmenuArea('MenuOptionsClosed')
    setmenuIconWidht('MenuIconBtnClosed')
  }

  //Pages Components Logic
  const [page, setpage] = useState(<Home />);

  const [buttons, setbuttons] = useState(
    <div className="ButtonArea">
      <button className='ButtonGreen LargeButton' onClick={() => toConfirmation()}>Confirmar Presença</button>
    </div>
  );

  const toHelp = () => {
    setpage(<Help />)
    closeMenu();
    setbuttons(
      <div className="ButtonArea">
        <button className='ButtonBlue Split' onClick={toHome}>Voltar</button>
        <button className='ButtonGreen Split' onClick={toAbout}>Sobre</button>
      </div>
    );
  }

  const toHome = () => {
    setpage(<Home />)
    closeMenu();
    setbuttons(
      <div className="ButtonArea">
        <button className='ButtonGreen LargeButton' onClick={() => toConfirmation()}>Confirmar Presença</button>
      </div>
    )
    window.scrollTo({ top: 0 });
  }

  const toAbout = () => {
    setpage(<About />)
    closeMenu();
    setbuttons(
      <div className="ButtonArea">
        <button className='ButtonYellow' onClick={() => {
          window.open("https://api.whatsapp.com/send?phone=5511920154900")
        }}>Contratar</button>
      </div>
    )
  }

  const toConfirmation = () => {
    setpage(<Confirmation />)
    closeMenu();
    setbuttons(
      <div className="ButtonArea">
        <button className='ButtonGreen' id='submit' onClick={() => toThankyou()}>Enviar</button>
      </div>
    );
    window.scrollTo({ top: 0 });
  }



  const toThankyou = () => {

    setbuttons(
      <div className="ButtonArea">
        <button className='ButtonGreen'>Carregando...</button>
      </div>
    )

    const nome = document.querySelector('input[name=Nome]').value;
    const rg = document.querySelector('input[name=RG]').value;
    const nomeacomp = document.querySelector('input[name=NomeAcomp]').value;
    const rgacomp = document.querySelector('input[name=RGAcomp]').value;

    fetch('', {

      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Nome: nome, RG: rg, NomeAcomp: nomeacomp, RGAcomp: rgacomp }),
    }).then(() => {
      window.scrollTo({ top: 0 });
      setpage(<ThankYou />)
      closeMenu();
      setbuttons(
        <div className="ButtonArea">
          <button className='ButtonBlue Split' onClick={() => toHome()}>Voltar</button>
        </div>
      )
    });


  }

  return (
    <>

      <div className="Header">
        <div className={menuIconWidht} onClick={() => openHandler()}><img src={menu} alt="V-icon" /></div>
        <div className={menuArea}>
          <button className='MenuButton' onClick={() => toHelp()}>Ajuda</button>
          <button className='MenuButton Bottom' onClick={() => toAbout()}>Sobre</button>
        </div>
      </div>

      <div className="content">{page}</div>

      <div className="content">{buttons}</div>

      <div className="SafeSpace"></div>

    </>
  )
}

export default App
