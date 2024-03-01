import classes from './css/Skill.module.css';
import ReactIcon from '../assets/react.svg';
import ExprssIcon from '../assets/express.svg';
import SequelizeIcon from '../assets/sequelize.svg';

const skillList = [
  { title: 'React', icon: ReactIcon },
  { title: 'Exprss', icon: ExprssIcon },
  { title: 'Sequelize', icon: SequelizeIcon },
];

export const Skill = () => {
  const elementSkill = skillList.map((skill, index) => (
    <li className={classes.li} key={skill + index}>
      <img src={skill.icon} alt={skill.title} />
      <strong>{skill.title}</strong>
    </li>
  ));

  return <>{elementSkill}</>;
};
