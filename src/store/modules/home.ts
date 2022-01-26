import { defineStore } from 'pinia';

type HomeType = {
  title: string;
  count: number;
};

export const useHomeStore = defineStore('home', {
  state: (): HomeType => {
    return {
      title: 'Pinia',
      count: 0,
    };
  },
  getters: {
    getFuncTitle(): string {
      return `Hello ${this.title}`;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    async incrementPromise() {
      try {
        const result = await new Promise((resolve: (value: number) => void) => {
          setTimeout(() => {
            resolve(10);
          }, 2000);
        });
        this.count += result;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
