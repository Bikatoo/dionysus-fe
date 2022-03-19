import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/system/account/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/system/account/sign_out',
    method: 'post'
  })
}
