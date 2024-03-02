import classes from './css/Layout.module.css';
import { Container } from './ui/Container';

export const Action = () => {
  return (
    <Container title='활동' className={classes.section}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <div className={classes['left-box']}>
            <strong>A2S LAB</strong>
            <p>2024.01.11 - </p>
          </div>

          <div className={classes['right-box']}>
            <p>
              모두의연구소에서 주관하는 A2S LAB (AI to Service)에서 랩원으로
              활동 중입니다.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
};
