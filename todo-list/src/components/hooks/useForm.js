import { useState } from 'react';

//https://todo-fatima.herokuapp.com/api/v1/todo
const todoAPI = 'https://husam278-api-server.herokuapp.com/api/todo';


const useForm = () => {

  const [item, setItem] = useState({});
  const [list, setList] = useState([])

  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
    console.log(item);
  };

  const addItem = (item) => {
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem])
      })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    addItem(item);
    setItem({ item: {} });
  }
    return [list,setList,handleInputChange,handleSubmit];
};
export default useForm;