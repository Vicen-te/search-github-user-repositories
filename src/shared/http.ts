// Request
export function http(request: RequestInfo): Promise<any> {
  return fetch(request)
        .then((response) => {
          if(response.ok) return response.json()
          throw new Error('Something went wrong with fetch');
        })
        .catch((error) => {console.error(error.message)});
}