import React from 'react'


const HOST = "http://localhost:12306"

export function fetchDetail() {
  return fetch('http://localhost:12306/appDetail', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then( result => {
    console.log(result)
    return response.json()
  })
}


export function fetchAppList() {
  return fetch('http://localhost:12306/miniAppList', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((result) => {
    console.log(result)
    return response.json()
  })
}