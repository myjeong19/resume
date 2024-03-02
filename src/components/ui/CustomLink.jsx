import classes from './css/CustomLink.module.css';

export const CustomLink = ({ children, href }) => {
  return (
    <a className={classes.link} href={href}>
      {children}
    </a>
  );
};
