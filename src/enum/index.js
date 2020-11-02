export const wave = {
  all: '全部波次',
  arethyr: '炎魔',
  wasteland: '荒原',
  covenantOfShadows: '暗影契约'
}
export const race = {
  all: '全部种族',
  human: '人类',
  demon: '恶魔',
  orc: '兽人',
  vampire: '吸血鬼',
  goblin: '哥布林',
  jaguallian: '豹人',
  lesserDemon: '小恶魔',
  cyclops: '独眼巨人',
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
  warrior: '勇士',
  commander: '指挥官',
  chiefOverseer: '首席督战官',
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
  theSonsOfTheRedStar: '赤星之子'
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
