import './App.css';
import Cards from "./components/Cards";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { useState } from 'react';
import { list2,list } from './components/Assets/crards-list';

function App() {
  const [selectedFilter,setSelectedFilter]=useState(0);
  return (
    <div className="App">
     <Header></Header>
     <Filter selectedFilter={selectedFilter}
     setSelectedFilter={setSelectedFilter}
      />
    {selectedFilter ==1 ? <Cards list={list}/>:<Cards list={list2}/>}
    </div>
  );
}

export default App;