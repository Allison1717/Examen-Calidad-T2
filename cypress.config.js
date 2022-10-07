const { defineConfig } = require("cypress");

module.exports = defineConfig({
    env: {
        baseURL: ('https://localhost:44320/')
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
