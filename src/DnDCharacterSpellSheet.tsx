import React from 'react'

// eslint-disable-next-line no-unused-vars
import DnDCharacter from './DnDCharacter'

import StatBox2 from './Components/StatBox2'

import './dndstyles.css'
import SpellTable from './Components/SpellTable'

interface IDnDCharacterSpellsSheetProps {
  character?: DnDCharacter
  defaultCharacter?: DnDCharacter
  onCharacterChanged?: (
    character: DnDCharacter,
    changedField: string,
    newValue: any
  ) => void
}

interface IDnDCharacterSpellsSheetState {
  character: DnDCharacter
}

const initialState: IDnDCharacterSpellsSheetState = {
  character: {}
}

class DnDCharacterSpellsSheet extends React.Component<
  IDnDCharacterSpellsSheetProps,
  IDnDCharacterSpellsSheetState
> {
  constructor(props: IDnDCharacterSpellsSheetProps) {
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
                  value={
                    character.spellcastingClass
                      ? character.spellcastingClass
                      : ''
                  }
                  onChange={(e) =>
                    this.updateCharacter('spellcastingClass', e.target.value)
                  }
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
                Spellcasting Class/Ability
              </label>
            </div>
            <div className='col-md-9 pr-2 pl-2' style={{ marginTop: '18px' }}>
              <div className='d-and-d-attribute-collection gray pr-3 pl-3'>
                <div className='row pl-3 pr-3'>
                  <div className='col-4 pr-4 pl-4'>
                    <StatBox2
                      name='preparedSpellsTotal'
                      value={character.preparedSpellsTotal}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <label
                      style={{
                        textTransform: 'none',
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: '0'
                      }}
                    >
                      Prepared Spells
                    </label>
                    <label
                      style={{
                        textTransform: 'none',
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: '0'
                      }}
                    >
                      Total
                    </label>
                  </div>
                  <div className='col-4 pr-4 pl-4'>
                    <StatBox2
                      name='spellSaveDC'
                      value={character.spellSaveDC}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <label
                      style={{
                        textTransform: 'none',
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: '0'
                      }}
                    >
                      Spell Save DC
                    </label>
                  </div>
                  <div className='col-4 pr-4 pl-4'>
                    <StatBox2
                      name='spellAttackBonus'
                      value={character.spellAttackBonus}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <label
                      style={{
                        textTransform: 'none',
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: '0'
                      }}
                    >
                      Spell Attack
                    </label>
                    <label
                      style={{
                        textTransform: 'none',
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: '0'
                      }}
                    >
                      Bonus
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className='d-and-d-box'>
                <SpellTable
                  level={0}
                  rows={9}
                  name='cantrips'
                  value={character.cantrips}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                  style={{ marginBottom: '23px' }}
                />
                <SpellTable
                  level={1}
                  rows={12}
                  showLabels
                  name='lvl1Spells'
                  slotsName='lvl1SpellSlotsTotal'
                  slotsUsedName='lvl1SpellSlotsUsed'
                  value={character.lvl1Spells}
                  slotsValue={character.lvl1SpellSlotsTotal}
                  slotsUsedValue={character.lvl1SpellSlotsUsed}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <SpellTable
                  level={2}
                  rows={13}
                  name='lvl2Spells'
                  slotsName='lvl2SpellSlotsTotal'
                  slotsUsedName='lvl2SpellSlotsUsed'
                  value={character.lvl2Spells}
                  slotsValue={character.lvl2SpellSlotsTotal}
                  slotsUsedValue={character.lvl2SpellSlotsUsed}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
              </div>
            </div>

            <div className='col-md-4'>
              <div className='d-and-d-box'>
                <SpellTable
                  level={3}
                  rows={13}
                  name='lvl3Spells'
                  slotsName='lvl3SpellSlotsTotal'
                  slotsUsedName='lvl3SpellSlotsUsed'
                  value={character.lvl3Spells}
                  slotsValue={character.lvl3SpellSlotsTotal}
                  slotsUsedValue={character.lvl3SpellSlotsUsed}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <SpellTable
                  level={4}
                  rows={13}
                  name='lvl4Spells'
                  slotsName='lvl4SpellSlotsTotal'
                  slotsUsedName='lvl4SpellSlotsUsed'
                  value={character.lvl4Spells}
                  slotsValue={character.lvl4SpellSlotsTotal}
                  slotsUsedValue={character.lvl4SpellSlotsUsed}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <SpellTable
                  level={5}
                  rows={9}
                  name='lvl5Spells'
                  slotsName='lvl5SpellSlotsTotal'
                  slotsUsedName='lvl5SpellSlotsUsed'
                  value={character.lvl5Spells}
                  slotsValue={character.lvl5SpellSlotsTotal}
                  slotsUsedValue={character.lvl5SpellSlotsUsed}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
              </div>
            </div>

            <div className='col-md-4'>
              <div className='d-and-d-box'>
                <SpellTable
                  level={6}
                  rows={9}
                  name='lvl6Spells'
                  slotsName='lvl6SpellSlotsTotal'
                  slotsUsedName='lvl6SpellSlotsUsed'
                  value={character.lvl6Spells}
                  slotsValue={character.lvl6SpellSlotsTotal}
                  slotsUsedValue={character.lvl6SpellSlotsUsed}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <SpellTable
                  level={7}
                  rows={9}
                  name='lvl7Spells'
                  slotsName='lvl7SpellSlotsTotal'
                  slotsUsedName='lvl7SpellSlotsUsed'
                  value={character.lvl7Spells}
                  slotsValue={character.lvl7SpellSlotsTotal}
                  slotsUsedValue={character.lvl7SpellSlotsUsed}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <SpellTable
                  level={8}
                  rows={7}
                  name='lvl8Spells'
                  slotsName='lvl8SpellSlotsTotal'
                  slotsUsedName='lvl8SpellSlotsUsed'
                  value={character.lvl8Spells}
                  slotsValue={character.lvl8SpellSlotsTotal}
                  slotsUsedValue={character.lvl8SpellSlotsUsed}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <SpellTable
                  level={9}
                  rows={7}
                  name='lvl9Spells'
                  slotsName='lvl9SpellSlotsTotal'
                  slotsUsedName='lvl9SpellSlotsUsed'
                  value={character.lvl9Spells}
                  slotsValue={character.lvl9SpellSlotsTotal}
                  slotsUsedValue={character.lvl9SpellSlotsUsed}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DnDCharacterSpellsSheet
