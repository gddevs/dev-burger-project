

// eslint-disable-next-line no-undef
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'DevBurger',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

