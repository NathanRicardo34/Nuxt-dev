type Input<T = unknown> = T

export type APIParams = {
  params?: Input
  endpoint: string
  data?: Input
  multipart?:boolean
}
