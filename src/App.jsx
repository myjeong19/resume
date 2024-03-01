import './App.css';
import { Action } from './components/Action';
import { Info } from './components/Info';

export const App = () => {
  return (
    <div className='app'>
      <Info />
      <Action />
    </div>
  );
};
