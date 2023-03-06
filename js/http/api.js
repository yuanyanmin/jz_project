function getPandect (data) {
  return fetch_POST('/pandect', data)
}

function getDetail (data) {
  return fetch_GET('/detail/', data)
}