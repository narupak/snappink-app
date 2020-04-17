import apiService from '../apiService'

const apiPath = '/gym_class/v1'

export const GymClassService = (configService = {}) => {
  const service = apiService(configService)
  return {
    createClass: (params) => {
      return service.post({
        url: `${apiPath}`,
        params: params,
      })
    },
    updateClass: (params , id) => {
      return service.put({
        url: `${apiPath}/${id}`,
        params: params,
      })
    },
    getById: (id) => {
      return service.get({
        url: `${apiPath}/${id}`
      })
    }
  }
}
