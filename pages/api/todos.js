let todos = [
    { id: 1, title: 'Learn Next.js', done: false },
    { id: 2, title: 'Build a Todo App', done: false },
    { id: 3, title: 'Deploy to Vercel', done: false },
] 
export default function handler(req,res){
    if (req.method === 'GET') {
        res.status(200).json(todos);
      } else if (req.method === 'POST') {
        const { title } = req.body;
    
        if (!title) {
          return res.status(400).json({ error: 'Title is required' });
        }
    
        const newTodo = {
          id: Date.now(),
          title,
          done: false,
        };
    
        todos.push(newTodo);
        res.status(201).json(newTodo);
      } else {
        res.status(405).json({ error: 'Method not allowed' });
      }
}