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
  ...(process.env.REACT_APP_ENV === 'production' ? production : development),
};
