import classes from './css/Skills.module.css';
import { Container } from './ui/Container';

import { Skill } from './Skill';

export const Skills = () => {
  return (
    <Container title='기술'>
      <ul className={classes.ul}>
        <Skill />
      </ul>
    </Container>
  );
};
