module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdtbjpha6gdu249nkmsg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_6hbz'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '3DhWQCEBdle3AEpXYKBPPzollmtswP8i'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});