/* eslint-disable prettier/prettier */
import React from 'react'

// eslint-disable-next-line no-unused-vars
import DnDCharacter from './DnDCharacter'

import StatRow from './Components/StatRow'
import Image from './Components/Image'

import './dndstyles.css'

interface IDnDCharacterProfileSheetProps {
  character?: DnDCharacter
  defaultCharacter?: DnDCharacter
  onCharacterChanged?: (
    character: DnDCharacter,
    changedField: string,
    newValue: any
  ) => void
}

interface IDnDCharacterProfileSheetState {
  character: DnDCharacter
}

const initialState: IDnDCharacterProfileSheetState = {
  character: {}
}

class DnDCharacterProfileSheet extends React.Component<
  IDnDCharacterProfileSheetProps,
  IDnDCharacterProfileSheetState
> {
  constructor(props: IDnDCharacterProfileSheetProps) {
    super(props)
    if (props.defaultCharacter) {
      initialState.character = props.defaultCharacter
    }
    this.state = initialState
  }

  updateCharacter(name: string, value: any) {
    const oldCharacter = this.getCharacter()
    const newCharacter: DnDCharacter = {}
    Object.assign(newCharacter, oldCharacter)
    newCharacter[name] = value

    if (!this.props.character) {
      // NOT CONTROLLED
      this.setState({ character: newCharacter })
    }

    if (typeof this.props.onCharacterChanged === 'function') {
      this.props.onCharacterChanged(newCharacter, name, value)
    }
  }

  getCharacter() {
    // NOT CONTROLLED
    let character = this.state.character
    if (this.props.character) {
      // CONTROLLED
      character = this.props.character
    }
    return character
  }

  render() {
    const character = this.getCharacter()

    return (
      <div className='d-and-d-character-sheet container-xl mt-5 mb-5'>
        <div>
          <div className='row mb-4'>
            <div className='col-md-3 pr-2 pl-2'>
              <div className='d-and-d-page-title'>D&D</div>
              <div className='d-and-d-attribute-collection char-name pr-3 pl-3'>
                <input
                  type='text'
                  value={character.name ? character.name : ''}
                  onChange={(e) => this.updateCharacter('name', e.target.value)}
                />
              </div>
              <label
                style={{
                  width: '100%',
                  textAlign: 'right',
                  textTransform: 'uppercase',
                  fontSize: '11px'
                }}
              >
                Character Name
              </label>
            </div>
            <div className='col-md-9 pr-2 pl-2'>
              <div className='d-and-d-attribute-collection pr-3 pl-3'>
                <div className='row pl-3 pr-3'>
                  <div className='col-md-4 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.age ? character.age : ''}
                      onChange={(e) =>
                        this.updateCharacter('age', e.target.value)
                      }
                    />
                    <label>Age</label>
                  </div>
                  <div className='col-md-4 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.height ? character.height : ''}
                      onChange={(e) =>
                        this.updateCharacter('height', e.target.value)
                      }
                    />
                    <label>Height</label>
                  </div>
                  <div className='col-md-4 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.weight ? character.weight : ''}
                      onChange={(e) =>
                        this.updateCharacter('weight', e.target.value)
                      }
                    />
                    <label>Weight</label>
                  </div>
                </div>
                <div className='row pl-3 pr-3'>
                  <div className='col-md-4 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.eyes ? character.eyes : ''}
                      onChange={(e) =>
                        this.updateCharacter('eyes', e.target.value)
                      }
                    />
                    <label>Eyes</label>
                  </div>
                  <div className='col-md-4 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.skin ? character.skin : ''}
                      onChange={(e) =>
                        this.updateCharacter('skin', e.target.value)
                      }
                    />
                    <label>Skin</label>
                  </div>
                  <div className='col-md-4 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.hair ? character.hair : ''}
                      onChange={(e) =>
                        this.updateCharacter('hair', e.target.value)
                      }
                    />
                    <label>Hair</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className='d-and-d-box square'>
                <Image 
                  name='appearance'
                  value={character.appearance}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                  Character Appearance
                </label>
              </div>

              <div className='d-and-d-box mt-3'>
                <textarea
                  style={{ paddingBottom: '5px' }}
                  value={
                    character.backstory ? character.backstory : ''
                  }
                  onChange={(e) =>
                    this.updateCharacter('backstory', e.target.value)
                  }
                  rows={26}
                />
                <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                  Character Backstory
                </label>
              </div>
            </div>

            <div className='col-md-8'>
              <div className='d-and-d-box'>
                <div className='row'>
                  <div className='col-md-6 border-right'>
                    <div className='d-and-d-gray-text' style={{ paddingBottom: '1px' }}>
                      <label style={{ width: '70px' }}>Faction Rank</label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 70px)' }}
                        className='d-and-d-linput'
                        value={character.factionRank ? character.factionRank : ''}
                        onChange={(e) =>
                          this.updateCharacter('factionRank', e.target.value)
                        }
                      />
                    </div>

                    <textarea
                      style={{ paddingBottom: '5px' }}
                      value={
                        character.allies ? character.allies : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('allies', e.target.value)
                      }
                      rows={16}
                    />
                  </div>
                  <div className='col-md-6'>
                    <div className='d-and-d-box gray noborder' style={{marginBottom: '13px'}}>
                      <div className='d-and-d-faction-input'>
                        <label>Faction</label>
                        <input
                          type='text'
                          value={character.faction ? character.faction : ''}
                          onChange={(e) =>
                            this.updateCharacter('faction', e.target.value)
                          }
                        />
                      </div>
                      <Image 
                        classes='faction'
                        name='factionImg'
                        value={character.factionImg}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                    </div>

                    <textarea
                      style={{ paddingBottom: '5px' }}
                      value={
                        character.allies2 ? character.allies2 : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('allies2', e.target.value)
                      }
                      rows={3}
                    />
                  </div>
                </div>
                
                <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                  Allies & Organisations
                </label>
              </div>
              
              <div className='d-and-d-box mt-3'>
                <div className='row'>
                  <div className='col-md-6 border-right'>
                    <textarea
                      style={{ paddingBottom: '5px' }}
                      value={
                        character.additionalFeatures ? character.additionalFeatures : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('additionalFeatures', e.target.value)
                      }
                      rows={13}
                    />
                  </div>
                  <div className='col-md-6'>
                    <textarea
                      style={{ paddingBottom: '5px' }}
                      value={
                        character.additionalFeatures2 ? character.additionalFeatures2 : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('additionalFeatures2', e.target.value)
                      }
                      rows={13}
                    />
                  </div>
                </div>

                <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                  Additional Features & Traits
                </label>
              </div>

              <div className='d-and-d-box mt-3'>
                <div className='row'>
                  <div className='col-md-6 border-right'>
                    <StatRow
                      classes='m-2 rounded rounded-sides wide-input'
                      label='Total Non-Consumable Magic Items'
                      name='totalNonConsumableMagicItems'
                      value={character.totalNonConsumableMagicItems}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />

                    <textarea
                      style={{ paddingBottom: '5px', marginTop: '2px' }}
                      value={
                        character.treasure ? character.treasure : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('treasure', e.target.value)
                      }
                      rows={8}
                    />
                  </div>
                  <div className='col-md-6'>
                    <textarea
                      style={{ paddingBottom: '5px', marginTop: '4px' }}
                      value={
                        character.treasure2 ? character.treasure2 : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('treasure2', e.target.value)
                      }
                      rows={10}
                    />
                  </div>
                </div>
                
                <label className='d-and-d-title' style={{ marginTop: '4px' }}>
                  Treasure
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DnDCharacterProfileSheet
