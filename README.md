# dnd-character-sheets

> Dungeons and Dragons 5th Edition character sheets created in ReactJS.

[https://darylbuckle.github.io/dnd-character-sheets](https://darylbuckle.github.io/dnd-character-sheets)

[![NPM](https://img.shields.io/npm/v/dnd-character-sheets.svg)](https://www.npmjs.com/package/dnd-character-sheets) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img width="600" alt="Screenshot 2020-09-06 at 19 35 55" src="https://user-images.githubusercontent.com/15156674/92332881-adbfee80-f078-11ea-8bcc-82cfb6484465.png">


## Contents

* [About](#about)
* [Install](#install)
* [Usage](#usage)
* [Props](#props)
* [DnDCharacter Class](#dndcharacter-class)
* [License](#license)


## About

ReactJS components that render Dungeons & Dragons character sheets, namely a character stats sheet, character profile sheet and spell sheet.

Visit [https://darylbuckle.github.io/dnd-character-sheets](https://darylbuckle.github.io/dnd-character-sheets) to see these components in use.

The attributes in the example can be populated on the web page and outputs to print nicely, so you can populate some attributes on the page and print the sheet. Characters can also be exported to a json file and imported from a json file.


## Install

```bash
npm install --save dnd-character-sheets
```

## Usage

```tsx
import React, { Component } from 'react'

import DnDCharacterStatsSheet from 'dnd-character-sheets'
import 'dnd-character-sheets/dist/index.css'

class Example extends Component {
  render() {
    return <DnDCharacterStatsSheet />
  }
}
```

```DnDCharacterStatsSheet``` renders a stats sheet.

```DnDCharacterProfileSheet``` renders a character traits sheet.

```DnDCharacterSpellSheet``` renders a spell sheet.


## Props

Each component accepts the same props.

Each component can be controlled or uncontrolled. Either character and onCharacterChanged should be specified (controlled), or defaultCharacter should be specified.

| Property | Type | Description |
| -------- |------| ------------|
| defaultCharacter | DnDCharacter  | An instance of the DnDCharacter class. If character is not set the sheet will initialize with the values specified here. |
| character | DnDCharacter  | An instance of the DnDCharacter class. If set the sheet will always use the values specified here. |
| updateCharacter | func (character: DnDCharacter)  | Called whenever a value in a sheet is changed. A modified DnDCharacter object is returned. |


## DnDCharacter Class

The DnDCharacter class holds the attributes of a character. The attributes are shown below.

```tsx
  name?: string
  classLevel?: string
  background?: string
  playerName?: string
  faction?: string
  race?: string
  alignment?: string
  xp?: string
  dciNo?: string

  str?: string
  dex?: string
  con?: string
  int?: string
  wis?: string
  cha?: string

  inspiration?: string
  proficiencyBonus?: string

  strSave?: string
  strSaveChecked?: boolean
  dexSave?: string
  dexSaveChecked?: boolean
  conSave?: string
  conSaveChecked?: boolean
  intSave?: string
  intSaveChecked?: boolean
  wisSave?: string
  wisSaveChecked?: boolean
  chaSave?: string
  chaSaveChecked?: boolean

  skillAcrobatics?: string
  skillAcrobaticsChecked?: boolean
  skillAnimalHandling?: string
  skillAnimalHandlingChecked?: boolean
  skillArcana?: string
  skillArcanaChecked?: boolean
  skillAthletics?: string
  skillAthleticsChecked?: boolean
  skillDeception?: string
  skillDeceptionChecked?: boolean
  skillHistory?: string
  skillHistoryChecked?: boolean
  skillInsight?: string
  skillInsightChecked?: boolean
  skillIntimidation?: string
  skillIntimidationChecked?: boolean
  skillInvestigation?: string
  skillInvestigationChecked?: boolean
  skillMedicine?: string
  skillMedicineChecked?: boolean
  skillNature?: string
  skillNatureChecked?: boolean
  skillPerception?: string
  skillPerceptionChecked?: boolean
  skillPerformance?: string
  skillPerformanceChecked?: boolean
  skillPersuasion?: string
  skillPersuasionChecked?: boolean
  skillReligion?: string
  skillReligionChecked?: boolean
  skillSlightOfHand?: string
  skillSlightOfHandChecked?: boolean
  skillStealth?: string
  skillStealthChecked?: boolean
  skillSurvival?: string
  skillSurvivalChecked?: boolean

  passivePerception?: string
  otherProficiencies?: string

  ac?: string
  init?: string
  speed?: string

  maxHp?: string
  hp?: string
  tempHp?: string

  hitDiceMax?: string
  hitDice?: string

  deathsaveSuccesses?: number
  deathsaveFailures?: number

  attacks?: any[]
  attacksText?: string

  cp?: string
  sp?: string
  ep?: string
  gp?: string
  pp?: string
  equipment?: string
  equipment2?: string

  personalityTraits?: string
  ideals?: string
  bonds?: string
  flaws?: string

  featuresTraits?: string

  age?: string
  height?: string
  weight?: string
  eyes?: string
  skin?: string
  hair?: string

  appearance?: string
  backstory?: string

  factionImg?: string
  factionRank?: string
  allies?: string
  allies2?: string

  additionalFeatures?: string
  additionalFeatures2?: string

  totalNonConsumableMagicItems?: string
  treasure?: string
  treasure2?: string

  spellcastingClass?: string
  preparedSpellsTotal?: string
  spellSaveDC?: string
  spellAttackBonus?: string

  cantrips?: any[]

  lvl1SpellSlotsTotal?: string
  lvl1SpellSlotsUsed?: number
  lvl1Spells?: any[]

  lvl2SpellSlotsTotal?: string
  lvl2SpellSlotsUsed?: number
  lvl2Spells?: any[]

  lvl3SpellSlotsTotal?: string
  lvl3SpellSlotsUsed?: number
  lvl3Spells?: any[]

  lvl4SpellSlotsTotal?: string
  lvl4SpellSlotsUsed?: number
  lvl4Spells?: any[]

  lvl5SpellSlotsTotal?: string
  lvl5SpellSlotsUsed?: number
  lvl5Spells?: any[]

  lvl6SpellSlotsTotal?: string
  lvl6SpellSlotsUsed?: number
  lvl6Spells?: any[]

  lvl7SpellSlotsTotal?: string
  lvl7SpellSlotsUsed?: number
  lvl7Spells?: any[]

  lvl8SpellSlotsTotal?: string
  lvl8SpellSlotsUsed?: number
  lvl8Spells?: any[]

  lvl9SpellSlotsTotal?: string
  lvl9SpellSlotsUsed?: number
  lvl9Spells?: any[]
  ```


## License

MIT © [Daryl Buckle](https://github.com/DarylBuckle) 2020
