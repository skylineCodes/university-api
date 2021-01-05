import app from './app.js';
import debug from './config/debug.js';

/**
 * Start up server
 */
app.listen(process.env.PORT, () => {
  debug.log(`Server is up on port ${ process.env.PORT }`);
});
