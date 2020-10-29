export const wave = {
  all: '全部波次',
  arethyr: '炎魔'
}
export const race = {
  all: '全部种族',
  human: '人类'
}
export const role = {
  all: '全部职业',
  advisor: '顾问'
}
export const faction = {
  all: '全部阵营',
  armyOfLeodysseus: '铁狮军团'
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
