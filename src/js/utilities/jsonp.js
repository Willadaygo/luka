import coreJsonp from 'fetch-jsonp'

export default function jsonp(url, params, opts, fn) {
  let query = url.indexOf('?') === -1 ? '?' : '&'
  query += Object
      .keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join('&')

  return coreJsonp(`${url}${query}`, opts, fn)
}
