export const convertObjectToQueryString = obj => {
  const queryString = [];
  for (let prop in obj)
    if (obj.hasOwnProperty(prop))
      queryString.push(encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]));
  return queryString.join('&');
}