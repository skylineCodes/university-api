import app from './app';
import debug from './config/debug';

/**
 * Start up server
 */
app.listen(process.env.PORT, () => {
  debug.log(`Server is up on port ${ process.env.PORT }`);
});
