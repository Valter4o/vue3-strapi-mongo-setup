import axios from "axios"
import errorHandler from "@/shared/services/errorHandler"

const $axios = axios.create({
  baseURL: "http://localhost:1337",
})
const get = async (requestUrl) => {
  try {
    const { status, data } = await $axios.get(requestUrl)

    if (status < 200 || status > 299) {
      errorHandler(status)
    }

    return data
  } catch (error) {
    errorHandler(error)
  }
}

const post = async (requestUrl, data) => {
  try {
    const res = await $axios.post(requestUrl, data)
    const status = res.status

    if (status < 200 || status > 299) {
      errorHandler(status)
    }

    return res.data
  } catch (error) {
    errorHandler(error)
  }
}
const patch = async (requestUrl, data) => {
  try {
    const res = await $axios.patch(requestUrl, data)
    const status = res.status

    if (status < 200 || status > 299) {
      errorHandler(status)
    }

    return status
  } catch (error) {
    errorHandler(error)
  }
}
const deleteReq = async (requestUrl) => {
  try {
    const res = await $axios.delete(requestUrl)
    const status = res.status

    if (status < 200 || status > 299) {
      errorHandler(status)
    }

    return status
  } catch (error) {
    errorHandler(error)
  }
}

export { get, post, patch, deleteReq }
