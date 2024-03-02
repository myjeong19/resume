import './App.css';
import { Action } from './components/Action';
import { Education } from './components/Education';
import { Info } from './components/Info';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export const App = () => {
  return (
    <div className='app'>
      <Info />
      <Skills />
      <Projects />
      <Education />
      <Action />
    </div>
  );
};
