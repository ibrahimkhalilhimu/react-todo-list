import { createContext, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

export const UserContext = createContext()

// to get the data LocalStorage
const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  }else{
    return [];
  }
}

function App() {
  const [inputData,setInputData] = useState('') 
  const [description,setDescription] = useState('') 
  const [items,setItems] = useState(getLocalItems())
  return (
    <div className="App">
      <UserContext.Provider value={[inputData, setInputData,description,setDescription,items,setItems]}>
      <TodoList/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
