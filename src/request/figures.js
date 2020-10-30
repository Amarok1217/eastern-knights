import axios from '@/config/axiosConfig'

// 获取人物列表
export const getFigureList = params => {
  return axios.get('/getFigureList',
    { params }
  )
}
// 获取人物详情
export const getFigureById = params => {
  return axios.get('/getFigureById',
    { params }
  )
}
