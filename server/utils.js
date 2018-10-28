const crypto = require('crypto')

class Utils {
  /**
   * hash password
   *
   * @author mutoe <mutoe@foxmail.com>
   * @static
   * @param {string} password original password
   * @returns {string} hashed password
   * @memberof Utils
   */
  static cryptoPassword (password) {
    // load environment configuration
    const secretAlgorithm = process.env.SERVER_SECRET_ALGORITHM || 'sha1'
    const secretKey = process.env.SERVER_SECRET_KEY || 'ILoveMRX!'

    return crypto
      .createHmac(secretAlgorithm, secretKey)
      .update(password)
      .digest('hex')
  }
}

module.exports = Utils
