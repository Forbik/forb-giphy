import { defineStore } from 'pinia'

const apiKey: string = import.meta.env.VITE_API_KEY
const apiUrl: string = import.meta.env.VITE_API_URL

type AdditionalParams = {
  [key: string]: string | number;
}

function buildQueryString(params: AdditionalParams): string {
  const query: string = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  return query ? `?${query}` : '';
}

function Endpoint(path: string, additionalParams?: AdditionalParams): string {
  const queryParams: string = buildQueryString({
    api_key: apiKey,
    ...additionalParams,
  });

  const url: string = `${apiUrl}/${path}${queryParams}`;
  return url;
}

export interface Gif {
  id: string
  title: string
  url: string
  user?: User
  images: {
    original: { url: string }
    original_still: { url: string }
    fixed_height: { url: string }
    fixed_height_still: { url: string }
  }
}

export interface User {
  avatar_url: string
  display_name: string
  profile_url: string
  username: string
}

interface GifState {
  gifs: any[],
  limit: number,
  searchQuery: string,
  currentGif: any[]
}

export const useGifStore = defineStore('giphy', {
  state: (): GifState => ({
    gifs: [],
    limit: 20,
    searchQuery: '',
    currentGif: []
  }),
  actions: {
    setSearchQuery(query: string) {
      this.searchQuery = query
      this.gifs = []
    },
    async fetchGifById (id: string) {
      try {
        const response = await fetch(Endpoint(id))
        const data = await response.json()
        this.currentGif = data.data
        return this.currentGif
      } catch (error) {
        console.error('Error fetching gif details: ', error)
      }
    },
    async fetchTrandingGifs () {
      const endpointURL = Endpoint('trending', { limit: this.limit })

      try {
        const response = await fetch(endpointURL)
        const data = await response.json()
        if (data.data.length > 0) {
          this.gifs = data.data
        }
        return this.gifs
      } catch (error) {
        console.error("Error fetching tranding gifs: ", error)
      }
    },
    async loadMore (query?: string) {
      const offset = this.gifs.length
      let endpointURL = Endpoint('trending', {
        limit: this.limit,
        offset
      })

      if (query && query.length > 0) {
        endpointURL = Endpoint('search', {
          q: query,
          limit: this.limit,
          offset
        })
      }

      try {
        const response = await fetch(endpointURL)
        const data = await response.json();
        if (data.data.length > 0) {
          this.gifs = [...this.gifs, ...data.data]
        }
      } catch (error) {
        console.error("Error fetching more gifs: ", error)
      }
    },
    async searchGifs (query: string) {
      const offset = this.gifs.length
      const endpointURL: string = Endpoint('search', {
        q: query,
        limit: this.limit,
        offset
      })
      try {
        const response = await fetch(endpointURL)
        const data = await response.json()
        if (data.data.length > 0) {
          this.gifs = [...this.gifs, ...data.data]
        } else {
          this.searchGifs('not found')
        }
        return this.gifs
      } catch (error) {
        console.error("Error fetch search gifs: ", error)
      }
    },
    async randomGifs () {
      const endpointURL: string = Endpoint('random')
      try {
        const response = await fetch(endpointURL)
        const data = await response.json()
        return data.data
      } catch (error) {
        console.error("Error fetch random gifs: ", error)
      }
    }
  }
})