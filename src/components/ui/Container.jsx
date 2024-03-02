import classes from './css/Container.module.css';

export const Container = ({
  containerTag,
  innerTitleTag,
  title,
  children,
  className,
}) => {
  const ContainerTag = containerTag || 'section';
  const InenerTitleTag = innerTitleTag || 'h2';

  return (
    <ContainerTag className={`${classes.container} ${className}`}>
      <InenerTitleTag className={classes.title}>{title}</InenerTitleTag>
      {children}
    </ContainerTag>
  );
};
