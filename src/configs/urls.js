import enums from '../enums';

const common = {

};

const development = {
  endPointAdmin: 'http://localhost:1111/api/v1',
};

const production = {
  endPointAdmin: 'http://serverhost.domain/api/v1',
};

export default {
  ...common,
  ...(process.env.APP_ENV === enums.APP_ENV_PRODUCTION ? production : development),
};
