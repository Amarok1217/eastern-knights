export const wave = {
  all: '全部波次',
  arethyr: '炎魔',
  wasteland: '荒原',
  siegeAtBjorngar: '围城',
  soulSpiller: '噬魂者',
  covenantOfShadows: '暗影契约'
}
export const race = {
  all: '全部种族',
  human: '人类',
  demon: '恶魔',
  dwarf: '矮人',
  orc: '兽人',
  frostElf: '冰霜精灵',
  shadowElf: '暗影精灵',
  vampire: '吸血鬼',
  goblin: '哥布林',
  jaguallian: '豹人',
  lesserDemon: '小恶魔',
  cyclops: '独眼巨人',
  troll: '巨魔',
  halfGiant: '半巨人',
  orge: '食人魔',
  uubyr: '兽人吸血鬼',
  unknown: '未知'
}
export const role = {
  all: '全部职业',
  leader: '领袖',
  advisor: '顾问',
  destroyer: '毁灭者',
  warlord: '战争领主',
  swordsman: '剑士',
  darkPrince: '黑暗王子',
  soldier: '士兵',
  archer: '弓箭兵',
  bowCaster: '神射手',
  assassin: '将军',
  warrior: '勇士',
  ranger: '游侠',
  commander: '指挥官',
  chiefOverseer: '首席督战官',
  hero: '英雄',
  cleric: '牧师',
  general: '将军',
  mercenary: '雇佣兵',
  temptress: '魅惑者',
  monster: '怪物',
  god: '神'
}
export const faction = {
  all: '全部阵营',
  armyOfLeodysseus: '铁狮军团',
  theLegionOfArethyr: '毁灭军团',
  theOrderOfEathyron: '金鹰骑士',
  theCongregationOfNecronominus: '不死教团',
  xylonasFlock: '鹿林盟军',
  illythiasBrood: '伊氏血族',
  theConvocationOfBassyliaL: '法师议会',
  theCircleOfPoxxus: '邪魔密社',
  theHouseOfTheNobleBear: '巨熊战团',
  theSonsOfTheRedStar: '赤星之子',
  none: '无阵营'
}
export const getArr = (obj) => {
  let result = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key]
      result.push({
        label: element,
        value: key
      })
    }
  }
  return result
}
export const getKey = (value, obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key]
      if (value === element) {
        return key
      }
    }
  }
}
