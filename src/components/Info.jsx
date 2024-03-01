import classes from './css/Info.module.css';

export const Info = () => {
  return (
    <header className={classes.header}>
      <h1>이력서</h1>
      <section>
        <h2>
          안녕하세요. <br />
          프런트엔드 개발을 지망하는 정민영입니다.
        </h2>
        <p>
          사용자가 직관적으로 이해하고 편안하게 사용할 수 있는 UI/UX 디자인에
          깊은 관심을 가지고 있습니다. <br /> 또한, 아름다운 인터페이스와
          애니메이션을 구현하는 것을 좋아합니다. <br />
          동료들과 지속적으로 피드백을 주고받으며 함께 성장해 나가는 과정을
          소중히 여깁니다.
        </p>
      </section>
    </header>
  );
};
