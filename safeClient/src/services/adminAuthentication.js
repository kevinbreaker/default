import api from './api'

export default {
  postAdmin (dados) {
    return api().post('/admin', dados)
  },
  getAdmin (dados) {
    return api().post('/admin/login', dados)
  }
}
