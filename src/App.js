import { createContext, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

export const UserContext = createContext()

function App() {
  const [inputData,setInputData] = useState('') 
  const [description,setDescription] = useState('') 
  const [items,setItems] = useState([])
  return (
    <div className="App">
      <UserContext.Provider value={[inputData, setInputData,description,setDescription,items,setItems]}>
      <TodoList/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
