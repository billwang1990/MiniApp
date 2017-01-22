import React from 'react'


const HOST = "http://localhost:12306"

function fetchData(path, method = 'GET') {
  return fetch(HOST+path, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then( result => {
      return result.json()
  })
}

export function fetchDetail() {
  return fetchData('/appDetail')
}

export function fetchAppList() {
  return fetchData('/miniAppList')
}