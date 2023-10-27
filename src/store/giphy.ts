import { defineStore } from 'pinia'

interface GifState {
  API_KEY: string,
  gifs: any[],
  isNotFound: boolean,
  limit: number,
  searchQuery: string,
  currentGif: any[]
}

export const useGifStore = defineStore('giphy', {
  state: (): GifState => ({
    API_KEY: '9AErMLTDCKyC1JWWp80OGUjsKKvsm5f1',
    gifs: [],
    isNotFound: false,
    limit: 20,
    searchQuery: '',
    currentGif: []
  }),
  actions: {
    setSearchQuery(query: string) {
      this.searchQuery = query
    },
    async getGifById (id: string) {
      try {
        const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${this.API_KEY}`
  
        const response = await fetch(url)
        const data = await response.json()
        this.currentGif = data.data
        return this.currentGif
      } catch (error) {
        console.error('Error fetching gif details: ', error)
      }
    },
    async fetchGifs (query: string) {
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&q=${query}&limit=${this.limit}`

      if (query === 'trending') {
        url = `https://api.giphy.com/v1/gifs/trending?api_key=${this.API_KEY}&limit=${this.limit}`
      }

      try {
        const response = await fetch(url)
        const data = await response.json()
        if (data.data.length > 0) {
          this.gifs = data.data
          this.isNotFound = false
        } else {
          this.randomGifs('not found').then((data) => {
            this.gifs = [data]
          })
        }
        return this.gifs
      } catch (error) {
        console.error("Error fetching gifs: ", error)
      }
    },
    async loadMore (query: string) {
      const offset = this.gifs.length
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&q=${this.searchQuery}&limit=${this.limit}&offset=${offset}`

      if (query === 'trending') {
        url = `https://api.giphy.com/v1/gifs/trending?api_key=${this.API_KEY}&limit=${this.limit}&offset=${offset}`
      }

      try {
        const response = await fetch(url)
        const data = await response.json();
        if (data.data.length > 0) {
          this.gifs = [...this.gifs, ...data.data]
          this.isNotFound = false
        }
      } catch (error) {
        console.error("Error fetching more gifs: ", error)
      }
    },
    async randomGifs (tag: string) {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${this.API_KEY}&tag=${tag}&limit=${this.limit}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        return data.data
      } catch (error) {
        console.error("Error fetch random gifs: ", error)
      }
    }
  }
})