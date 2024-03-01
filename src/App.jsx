import './App.css';
import { Action } from './components/Action';
import { Education } from './components/Education';
import { Info } from './components/Info';

export const App = () => {
  return (
    <div className='app'>
      <Info />
      <Action />
      <Education />
    </div>
  );
};
