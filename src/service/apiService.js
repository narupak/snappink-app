import axios from 'axios'
import {
  BASE_API,
  BASE_PATH_API,
} from './apiConfig'
import { toast } from 'react-toastify'

const getConfig = (params) => {
  var user = JSON.parse(localStorage.getItem("user"))
  return {
    baseURL: BASE_API + BASE_PATH_API,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': user.token
    },
    params: params
  }
}

const axiosSuccess = (res, configService) => {
  console.log(`${res.config.method} => ${res.config.url}`, res)
  if(res) {
    if(res.status === 200) {
      if(configService.isShowToastSuccess) {
        toast.success(res.data.message)
      }
      return res.data.result ? res.data.result : ( res.data.results ? res.data.results : {})
    } else {
      toast.warn(res.data.message)
      // setLoadingRedux(false)
      return false
    }
  } else {
    toast.error('Server Error')
    // setLoadingRedux(false)
    return false
  }
}

const axiosError = (error) => {
  console.error(error)
  console.error('Error response', error.response)
  if (error.response && error.response.data && error.response.data.message) {
    toast.error(error.response.data.message)
  } else {
    toast.error('Server Error')
  }
  // setLoadingRedux(false)
  return false
}

const axiosService = (type, url, params, configService) => {
  let config = getConfig(params)
  switch (type) {
    case 'get'    : return axios.get(url, config).then((res) => {return axiosSuccess(res, configService)}).catch(axiosError)
    case 'post'   : return axios.post(url, params, config).then((res) => {return axiosSuccess(res, configService)}).catch(axiosError)
    case 'put'    : return axios.put(url, params, config).then((res) => {return axiosSuccess(res, configService)}).catch(axiosError)
    case 'delete' : return axios.delete(url, config).then((res) => {return axiosSuccess(res, configService)}).catch(axiosError)
    default       : return false
  }
}

export default (configService = {}) => {
  return {
    get    : ({url, params}) => axiosService('get', url, params, configService),
    post   : ({url, params}) => axiosService('post', url, params, configService),
    put    : ({url, params}) => axiosService('put', url, params, configService),
    delete : ({url, params}) => axiosService('delete', url, params, configService)
  }
}