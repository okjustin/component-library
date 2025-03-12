import FlipCard from './components/FlipCard/FlipCard';
import styles from './App.module.scss';
import reactLogo from './assets/react.svg';

export default function App() {
  return (
    <>
      <h2>Flip Card</h2>

      <div className={styles.cardContainer}>
        <FlipCard>
          <FlipCard.Front>
            <div className={styles.cardContent}>
              <h1>Card Title</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere natus cumque id recusandae cupiditate aliquam dolorum quaerat soluta facilis iusto deserunt delectus esse praesentium non, ad molestiae, animi commodi! Ipsum.</p>
            </div>
          </FlipCard.Front>
          <FlipCard.Back>
            <div className={styles.cardContent}>
              <img src={reactLogo} />
              <caption>React to deez nuts</caption>
            </div>
          </FlipCard.Back>
        </FlipCard>
      </div>
    </>
  );
}
