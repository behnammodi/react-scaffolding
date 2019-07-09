import enums from '../configs/enums';

export default (...args) => {
  if (process.env.NODE_ENV === enums.APP_ENV_DEVELOPMENT)
    console.log('▶︎', ...args);
};
