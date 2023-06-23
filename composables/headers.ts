
export function headers() {
  const bearer = (multipart = false) => {
    return {
      headers: {
        Accept: 'application/json',
        ContentType: multipart ? 'multipart/form-data' : 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
  return {
    bearer
  }
}
