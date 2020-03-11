import app from './app';

/**
 * Start up server
 */
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${process.env.PORT}`);
});
