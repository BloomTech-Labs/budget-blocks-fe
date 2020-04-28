<<<<<<< HEAD
/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */


module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    
    require('@cypress/code-coverage/task')(on, config);
  
    return config;
=======
module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    require('@cypress/code-coverage/task')(on, config)
  
    return config
>>>>>>> c619094b5ae485d755240721a5d0112317029982
  }