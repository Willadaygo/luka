import jsonp from './jsonp'

const onSuccess = (json) => {
  const msg = json ? json.msg : ''

  return msg
}

const onError = (err) => {
  const msg = err ? err.msg : ''

  return msg
}

const submit = (url, email) => {
  const rand = Date.now() + Math.ceil(Math.random() * 100000)

  return jsonp(url, {
    EMAIL: email,
    _: rand,
  }, {
    jsonpCallback: 'c',
  })
  // .then(response => response.json())
  // .then((json) => {
  //   onSuccess(json)
  // })
  // .catch((err) => {
  //   onError(err)
  // })
}

export default {
  submit,
}
