import { authOptions } from './constants';

class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  register(email, password) {
    return fetch(`${authOptions.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(response => {
      try {
        if (response.status === 200){
          return response.json();
        }
      } catch (e) {
        return (e)
      }
    })
    .then(res => res)
    .catch(err => console.log(err));
  }
}

export default new Auth(authOptions);
