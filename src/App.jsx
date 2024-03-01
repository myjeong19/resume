import './App.css';
import { Action } from './components/Action';
import { Education } from './components/Education';
import { Info } from './components/Info';
import { Skills } from './components/Skills';

export const App = () => {
  return (
    <div className='app'>
      <Info />
      <Skills />
      <Action />
      <Education />
    </div>
  );
};
