export const wave = {
  all: '全部波次',
  arethyr: '炎魔',
  covenantOfShadows: '暗影契约'
}
export const race = {
  all: '全部种族',
  human: '人类',
  vampire: '吸血鬼'
}
export const role = {
  all: '全部职业',
  leader: '领袖',
  advisor: '顾问',
  warlord: '战争领主'
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
