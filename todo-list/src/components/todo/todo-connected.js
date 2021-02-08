import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './todo-connected.scss';
import './todo.scss';

import useAjax from '../hooks/useAjax';


const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {

  const [list, setList] = useState([]);

  const [list, setList] = useState([]);
  console.log('list', list);
  const [_getTodoItems, _toggleComplete, _addItem, _deleteItem] = useAjax(setList, list);

  const addItem = (item) => {
    item.due = new Date();
    _addItem(item);
  // const _addItem = (item) => {
  //   item.due = new Date();
  //   fetch(todoAPI, {
  //     method: 'post',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(item)
  //   })
  //     .then(response => response.json())
  //     .then(savedItem => {
  //       setList([...list, savedItem])
  //     })
  //     .catch(console.error);
  };

  const toggleComplete = id => {

    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;
      _toggleComplete(item, url);
    }

    // let item = list.filter(i => i._id === id)[0] || {};

    // if (item._id) {

    //   item.complete = !item.complete;

    //   let url = `${todoAPI}/${id}`;

    //   fetch(url, {
    //     method: 'put',
    //     mode: 'cors',
    //     cache: 'no-cache',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(item)
    //   })
    //     .then(response => response.json())
    //     .then(savedItem => {
    //       setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
    //     })
    //     .catch(console.error);
    // }
  };

  const deleteItems = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    let url = `${todoAPI}/${id}`;
    _deleteItem(item, url);
  };

  const getTodoItems = () => {
    _getTodoItems();
    // fetch(todoAPI, {
    //   method: 'get',
    //   mode: 'cors',
    // })
    //   .then(data => data.json())
    //   .then(data => setList(data.results))
    //   .catch(console.error);
  };

  useEffect(getTodoItems, []);

  return (
    <>
      <header id="HED">
        <h2 id="countH2">
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete} handleDelete={deleteItems}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;