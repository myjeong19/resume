import classes from './css/Layout.module.css';
import { Container } from './ui/Container';

export const Education = () => {
  return (
    <Container title='교육'>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <div className={classes['left-box']}>
            <strong>오름캠프</strong>
            <p>2023.11.28 - 2024.05.10</p>
          </div>

          <div className={classes['right-box']}>
            <p>오름캠프의 자바스크립트 웹 풀스택 과정을 수강하고 있습니다.</p>
          </div>
        </li>
      </ul>
    </Container>
  );
};
