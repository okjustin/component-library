import FlipCard from './components/FlipCard/FlipCard';
import styles from './App.module.scss';
import reactLogo from './assets/react.svg';
import TabbedContainer from './components/TabbedContainer/TabbedContainer';
import Tabs from './components/TabbedContainer/Tabs';
import Tab from './components/TabbedContainer/Tab';
import Container from './components/TabbedContainer/Container';

export default function App() {
  return (
    <>
      {/* <h2>Flip Card</h2>

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
      </div> */}

      <h2>Tabbed container</h2>

      <TabbedContainer className={styles.tabbedContainer}>
        <Tabs className={styles.tabs}>
          <Tab selection="1">1</Tab>
          <Tab selection="2">2</Tab>
          <Tab selection="3">3</Tab>
        </Tabs>
        <Container selection="1">1</Container>
        <Container selection="2">2</Container>
        <Container selection="3">3</Container>
      </TabbedContainer>
    </>
  );
}
