/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  describe('trae todos los paises de mi base de datos cuando ejecuto ruta /paises', () => {
    it('should get 200', () =>
      agent.get('/paises').expect(200)
    );
  });
});

describe('Activity routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  describe('trae todas las actividades de mi base de datos cuando ejecuto ruta /actividades', () => {
    it('should get 200', () =>
      agent.get('/actividades').expect(200)
    );
  });
});