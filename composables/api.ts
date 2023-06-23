import { api } from '../boot/axios'
import { headers } from '../composables/headers'
import { APIParams } from '../models'

const { bearer } = headers()

export class UseAPI {
  async get<T = unknown>(p: APIParams): Promise<T> {
    const config = p.params ? { params: p.params, ...bearer() } : { ...bearer() }
    const { data } = await api.get<T>(p.endpoint, config)
    return data
  }

  async post<T = unknown>(p: APIParams): Promise<T> {
    const { data } = await api.post<T>(p.endpoint, p.data, bearer(p.multipart ?? false))
    return data
  }

  async put<T = unknown>(p: APIParams): Promise<T> {
    const { data } = await api.put<T>(p.endpoint, p.data, bearer(p.multipart ?? false))
    return data
  }

  async remove(p: APIParams) {
    const { status } = await api.delete(p.endpoint, bearer())
    return status
  }
}
