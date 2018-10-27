const databaseName = process.env.MYSQL_DATABASE || 'pic'

const common = {
  define: {
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
}

module.exports = {

  development: Object.assign({}, common, {
    username: 'root',
    password: null,
    database: `${databaseName}_development`,
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  }),

  test: Object.assign({}, common, {
    username: 'root',
    password: null,
    database: `${databaseName}_test`,
    host: '127.0.0.1',
    dialect: 'mysql',
  }),

  production: Object.assign({}, common, {
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || null,
    database: `${databaseName}`,
    host: process.env.MYSQL_HOST || '127.0.0.1',
    dialect: 'mysql',
  }),

}
