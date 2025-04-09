import {useEffect, useState } from 'react';
import Head from 'next/head';


export default function Home(){
    const [todos, setTodos] = useState([]);
    const [title ,setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const apiUrl = '/api/todos'


    useEffect(()=>{
        fetchTodos(); 

    },[])

    const addTodo = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        setLoading(true);
        await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title }),
        });
        setTitle('');
        setLoading(false);
        fetchTodos();
      };
    const fetchTodos = async ()=>{
        const res = await fetch(apiUrl);
        const data = await res.json();
        setTodos(data);
    }
    return (
        <div className="container">
          <Head>
            <title>Next.js Todo App</title>
            <meta name="description" content="Serverless Todo App" />
          </Head>
          
          <main>
            <h1>📝 Next.js To-Do</h1>
            <form onSubmit={addTodo}>
              <input
                type="text"
                placeholder="Add a new task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Adding...' : 'Add'}
              </button>
            </form>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>✅ {todo.title}</li>
              ))}
            </ul>
          </main>
        </div>
      );


}