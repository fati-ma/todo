import axios from 'axios';

const useAjax = () => {

  //https://todo-fatima.herokuapp.com/api/v1/todo
  const todoAPI = 'https://husam278-api-server.herokuapp.com/api/todo';
  
  const handler = (url, method, body) => {
    return axios({
      method: method,
      url: url,
      data: body
    }).then(data => data.data)
  }

  return [handler,todoAPI]
};

export default useAjax;