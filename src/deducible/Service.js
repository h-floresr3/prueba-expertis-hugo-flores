const { Logger } = require('@rimac/common');
const ServiceSupports = require('./support/ServiceSupports');

module.exports = {

  async procesarDeducible(payload) {
    Logger.info('service procesarDeducible');
    Logger.info(payload);
    const lines = payload.text.split('\n');
    const lineasTalleres = ServiceSupports.obtenerLineasValidas(lines);
    return ServiceSupports.procesarLineas(lineasTalleres);
  }
};
