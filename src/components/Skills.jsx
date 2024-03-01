import classes from './css/Skills.module.css';

import { Skill } from './Skill';

export const Skills = () => {
  return (
    <section className={classes.section}>
      <h2>기술</h2>
      <ul className={classes.ul}>
        <Skill />
      </ul>
    </section>
  );
};
