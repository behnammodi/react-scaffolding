import enums from '../enums';

export default (...args) => {
  if (process.env.APP_ENV === enums.APP_ENV_DEVELOPMENT) console.log('▶︎', ...args);
}