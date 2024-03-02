import classes from './css/Project.module.css';
import { CustomLink } from './ui/CustomLink';

export const Project = ({ projects }) => {
  const elementProejct = projects.map(project => (
    <article className={classes.project} key={project.title}>
      <div className={classes.box}>
        <div className={classes.text}>
          <h3>{project.title}</h3>
          <strong>{project.stack}</strong>
          <ul className={classes.descriptions}>
            <strong>Description</strong>
            {project.descriptions.map(description => (
              <li className={classes.description} key={description}>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className='link'>
          <CustomLink href={project.website}>Web</CustomLink>
          <CustomLink href={project.github}>Github</CustomLink>
          <CustomLink href={project.detailed}>Detailed</CustomLink>
        </div>
      </div>

      <div className={classes.image}>
        <img src={project.img} alt={project.title} />
      </div>
    </article>
  ));

  return <>{elementProejct}</>;
};
