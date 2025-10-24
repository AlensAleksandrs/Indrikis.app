import { defineStore } from 'pinia'

interface Notification {
  id: number
  type: 'success' | 'error' | 'information' | 'warning'
  message: string
}

export const useNotifications = defineStore('notifications', {
  state: () => ({
    items: [] as Notification[],
    queue: [] as Notification[],
    maxVisible: 3,
  }),
  actions: {
    add(type: 'success' | 'error' | 'information' | 'warning', message: string) {
      const id = Date.now() + Math.random()
      const notif: Notification = { id, type, message }

      if (this.items.length < this.maxVisible) {
        this.items.push(notif)
        this._autoRemove(id)
      } else {
        this.queue.push(notif)
      }
    },
    remove(id: number) {
      this.items = this.items.filter((n) => n.id !== id)

      if (this.queue.length > 0) {
        const next = this.queue.shift()
        if (next) {
          this.items.push(next)
          this._autoRemove(next.id)
        }
      }
    },
    _autoRemove(id: number) {
      setTimeout(() => this.remove(id), 5000)
    },
  },
})
