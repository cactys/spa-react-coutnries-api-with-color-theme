import { ALL_COUNTRIES } from './constants';

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkingResponse(res) {
    return res.ok
      ? res.json()
      : res.json().then((err) => Promise.reject(err.message));
  }

  getCountries() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkingResponse);
  }
}

const api = new Api({
  baseUrl: ALL_COUNTRIES,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
