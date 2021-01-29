import path from 'path';
import app from './app';
import debug from './config/debug';

// eslint-disable-next-line no-underscore-dangle
global.__dirname = path.resolve('./');

/**
 * Start up server
 */
app.listen(process.env.PORT, () => {
  debug.log(`Server is up on port ${ process.env.PORT }`);
});
