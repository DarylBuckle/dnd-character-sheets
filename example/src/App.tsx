import React, { useState } from 'react'

import { DnDCharacterStatsSheet, DnDCharacter } from 'dnd-character-sheets'
import 'dnd-character-sheets/dist/index.css'

const App = () => {
  const [character, setCharacter] = useState<DnDCharacter>(loadDefaultCharacter())
  const [navTop, setNavTop] = useState<number>(0)
  const [prevScrollpos, setPrevScrollpos] = useState<number>(window.pageYOffset)

  window.onscroll = function() {onScroll()};
  function onScroll() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setNavTop(0)
    } else {
      setNavTop(-200);
    }
    setPrevScrollpos(currentScrollPos)
  }

  function loadDefaultCharacter () {
    let character: DnDCharacter = {}
    const lsData = localStorage.getItem('dnd-character-data')
    if (lsData) {
      try {
        character = JSON.parse(lsData)
      } catch {}
    }
    return character
  }

  function updateCharacter (character: DnDCharacter) {
    setCharacter(character)
    localStorage.setItem('dnd-character-data', JSON.stringify(character))
  }

  function exportCharacter () {
    const json = JSON.stringify(character, null, 2)

    var a = document.createElement('a');
    var file = new Blob([json], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = character.name ? character.name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.json' : 'dnd-character.json';
    a.click();
  }


  function importCharacter (event: any) {
    if (event.target.files.length > 0){
      var fr = new FileReader();

      fr.onload = function(e) { 
        console.log(e);
        if (e.target && e.target.result) {
          var result = JSON.parse(typeof e.target?.result === 'string' ? e.target?.result : '{}');
          if (!Array.isArray(result) && typeof result === 'object') {
            updateCharacter(result)
          } else {
            window.alert('Json file does not contain a DnD character.')
          }
        }
      }
    
      fr.readAsText(event.target.files[0]);
    }
  }

  function clearCharacter() {
    updateCharacter({ })
  }

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top' style={{ backgroundColor: 'rgb(204, 10, 33)', top: navTop === 0 ? '' : navTop + 'px' }}>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
          </button>
          <div style={{width:'100%'}}>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ml-lg-5' data-toggle='collapse' data-target='.navbar-collapse.show'>
                    <li className='nav-item mr-lg-3'>
                        <a className={'nav-link active'} href='/'>Stats</a>
                    </li>
                    <li className='nav-item mr-lg-3'>
                        <a className={'nav-link active'} href='/'>Profile</a>
                    </li>
                    <li className='nav-item mr-lg-3'>
                        <a className={'nav-link active'} href='/'>Spells</a>
                    </li>
                    <li className='nav-item mr-lg-3'>
                        <a className={'nav-link active'} href='/'>All</a>
                    </li>
                </ul>

                <ul className='navbar-nav ml-auto mr-lg-5' data-toggle='collapse' data-target='.navbar-collapse.show'>
                    <li className='nav-item mr-lg-3'>
                        <button className='btn btn-dark' onClick={() => exportCharacter()}>Export</button>
                        <input style={{display: 'none'}} type="file" id="selectFiles" accept="application/json" onChange={(e) => importCharacter(e)} />
                        <button className='btn btn-dark' onClick={() => document.getElementById("selectFiles")?.click()}>Import</button>
                        <button className='btn btn-dark' onClick={() => window.print()}>Print</button>
                        <button className='btn btn-danger' onClick={() => clearCharacter()}>Clear</button>
                    </li>
                </ul>
            </div>
          </div>
      </nav>
      <div className='app-holder'>

        <DnDCharacterStatsSheet 
          character={character}
          onCharacterChanged={updateCharacter}
        />

      </div>
    </div>
    
  )
}

export default App
