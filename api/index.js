import axios from 'axios'

const baseUrl = 'https://www.omdbapi.com'
export const apiPosterUrl = 'https://img.omdbapi.com'

export function searchMovie(movie, page = 1) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}`, {
        params: {
          apiKey: process.env.API_KEY,
          type: 'movie',
          t: movie,
          page,
        },
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function getMovie(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}`, {
        params: {
          apiKey: process.env.API_KEY,
          type: 'movie',
          i: id,
        },
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function getPosterImage(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}`, {
        params: {
          apiKey: process.env.API_KEY,
          type: 'movie',
          t: id,
        },
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function filterMovieBySearch(movie) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}`, {
        params: {
          apiKey: process.env.API_KEY,
          type: 'movie',
          s: movie,
        },
      })
      .then((response) => {
        resolve(response.data.Search)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
