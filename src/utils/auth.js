import { authOptions } from './constants';

class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _promiseHandler(promise) {
    return promise
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
  }

  register(email, password) {
    return this._promiseHandler(fetch(`${authOptions.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }));
  }

  authorize = (email, password) => {
    return this._promiseHandler(fetch(`${authOptions.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }));
  }

  getContent = (token) => {
    return this._promiseHandler(fetch(`${authOptions.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }));
  }
}

export default new Auth(authOptions);
