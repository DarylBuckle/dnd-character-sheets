export default class DnDCharacter {
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
}
