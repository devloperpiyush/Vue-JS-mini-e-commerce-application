import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    accessToken: null
  }),
  actions: {
    async loginUser() {
      try {
        const user = {
          username: 'example_user',
          email: 'user@example.com'
        };
        this.user = user;

        const accessToken = Math.random().toString(36).substr(2);
        this.$patch({ accessToken }); 

        localStorage.setItem('accessToken', accessToken);
      } catch (error) {
        console.error('Login error:', error);
        throw new Error('Login failed');
      }
    },
    logoutUser() {
      this.user = null;
      this.accessToken = null;
      localStorage.removeItem('accessToken');
    }
  },
  getters: {
    isLoggedIn() {
      return !!this.user;
    },
    currentUser() {
      return this.user;
    },
    accessToken() {
      return this.accessToken;
    }
  }
});
