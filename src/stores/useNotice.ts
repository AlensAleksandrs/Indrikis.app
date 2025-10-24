import { defineStore } from 'pinia'

export interface CookieChoices {
  performance: boolean
  functionality: boolean
  marketing: boolean
  mandatory?: boolean
  all?: boolean
}

export const useNotice = defineStore('notice', {
  state: () => ({
    accepted: false,
    choices: {} as CookieChoices,
  }),
  actions: {
    loadFromStorage() {
      const stored = localStorage.getItem('cookieConsent')
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as CookieChoices
          this.accepted = true
          this.choices = parsed
        } catch {
          this.accepted = false
          this.choices = {}
        }
      }
    },
    acceptAll() {
      const payload: CookieChoices = {
        all: true,
        performance: true,
        functionality: true,
        marketing: true,
      }
      this.accepted = true
      this.choices = payload
      localStorage.setItem('cookieConsent', JSON.stringify(payload))
    },
    acceptMandatory() {
      const payload: CookieChoices = {
        performance: false,
        functionality: false,
        marketing: false,
        mandatory: true,
      }
      this.accepted = true
      this.choices = payload
      localStorage.setItem('cookieConsent', JSON.stringify(payload))
    },
    acceptChoices(choices: CookieChoices) {
      this.accepted = true
      this.choices = choices
      localStorage.setItem('cookieConsent', JSON.stringify(choices))
    },
  },
})
