import { Config,browser } from 'protractor';
<<<<<<< HEAD
import { reporter } from './helpers/reporter';
=======
>>>>>>> Mejorando el primer caso de prueba

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/google.spec.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
    browser.ignoreSynchronization = true;
<<<<<<< HEAD
    reporter();
=======
>>>>>>> Mejorando el primer caso de prueba
  }
};
