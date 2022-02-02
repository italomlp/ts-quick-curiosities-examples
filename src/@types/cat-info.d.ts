export {}

declare global {
  interface Console {
    tron: {
      log: Function;
    }
  }
}