import axios from '@/config/axiosConfig'

// 发布消息
export const getFigureList = params => {
  return axios.get('/getFigureList',
    { params }
  )
}
