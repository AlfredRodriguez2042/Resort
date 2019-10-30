import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

// Components
import './App.css';
import AppRouter from './routes/AppRouter';
import Menu from './Components/Menu';

// Context
import { RoomProvider } from './Context'

function App() {
  return (
    <RoomProvider>
   <Router>
     <Menu/>
    <AppRouter/>
    </Router>      
      
    </RoomProvider>
  );
}

export default App;
