import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function submitLink(link) {
  try {
    return request.post(`${URL}/api/v1/links`, {url: `${link}`})
  } catch(e) {
    return { error: e.message }
  }
}
