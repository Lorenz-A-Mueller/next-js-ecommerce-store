module.exports = function setPostgresDefaultsOnHeroku() {
  if (process.env.DATABASE_URL) {
    // const { parse } = require('pg-connection-string');
    import { parse } from 'pg-connection-string';

    // Extract the connection information from the Heroku environment variable
    const { host, database, user, password } = parse(process.env.DATABASE_URL);

    // Set standard environment variables
    process.env.PGHOST = host;
    process.env.PGDATABASE = database;
    process.env.PGUSERNAME = user;
    process.env.PGPASSWORD = password;
    // process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY =
    // process.env.STRIPE_SECRET_KEY =
    // process.env.PRICE1=
    // process.env.PRICE2=
    // process.env.PRICE3=
    // process.env.PRICE4=
    // process.env.PRICE5=
    // process.env.PRICE6=
    // process.env.PRICE7=
    // process.env.PRICE8=
    // process.env.PRICE9=
    // process.env.PRICE10=
    // process.env.PRICE11=
    // process.env.PRICE12=
    // process.env.PRICE13=
    // process.env.PRICE14=
    // process.env.PRICE15=
    // process.env.PRICE16=
    // process.env.PRICE17=
    // process.env.PRICE18=
    // process.env.PRICE19=
    // process.env.PRICE20=
    // process.env.PRICE21=
    // process.env.PRICE22=
    // process.env.PRICE23=
    // process.env.PRICE24=
    // process.env.PRICE25=
    // process.env.PRICE26=
  }
};
