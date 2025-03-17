import FlipCard from './components/FlipCard/FlipCard';
import styles from './App.module.scss';
import reactLogo from './assets/react.svg';
import TabbedContainer from './components/TabbedContainer/TabbedContainer';
import Tabs from './components/TabbedContainer/Tabs';
import Tab from './components/TabbedContainer/Tab';
import Container from './components/TabbedContainer/Container';

import Carousel from './components/Carousel/Carousel';
import Slide from './components/Carousel/Slide';
import NavigationButton from './components/Carousel/NavigationButton';
import PositionIndicator from './components/Carousel/PositionIndicator';

import ContactForm from './components/Form/ContactForm';

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

      {/* <h2>Tabbed container</h2>

      <TabbedContainer className={styles.tabbedContainer}>
        <Tabs className={styles.tabs}>
          <Tab selection="1">1</Tab>
          <Tab selection="2">2</Tab>
          <Tab selection="3">3</Tab>
        </Tabs>
        <Container selection="1">1</Container>
        <Container selection="2">2</Container>
        <Container selection="3">3</Container>
      </TabbedContainer> */}

      {/* <h2>Carousel</h2>

      <Carousel className={styles.carousel}>
        <Slide index="0" className={styles.slide}>
          <div>
            Slide 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod voluptatem odit temporibus repellendus debitis, iste consectetur exercitationem et. Similique, repellat laudantium recusandae ratione minima quae aliquam explicabo veniam cum!
          </div>
          <NavigationButton direction="prev" className={styles.navButton}>Prev</NavigationButton>
          <NavigationButton direction="next" className={styles.navButton}>Next</NavigationButton>
          <PositionIndicator className={styles.positionIndicator} />
        </Slide>

        <Slide index="1" className={styles.slide}>
          <div>
            Slide 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod voluptatem odit temporibus repellendus debitis, iste consectetur exercitationem et. Similique, repellat laudantium recusandae ratione minima quae aliquam explicabo veniam cum!
          </div>
          <NavigationButton direction="prev" className={styles.navButton}>Prev</NavigationButton>
          <NavigationButton direction="next" className={styles.navButton}>Next</NavigationButton>
          <PositionIndicator className={styles.positionIndicator} />
        </Slide>

        <Slide index="2" className={styles.slide}>
          <div>
            Slide 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod voluptatem odit temporibus repellendus debitis, iste consectetur exercitationem et. Similique, repellat laudantium recusandae ratione minima quae aliquam explicabo veniam cum!
          </div>
          <NavigationButton direction="prev" className={styles.navButton}>Prev</NavigationButton>
          <NavigationButton direction="next" className={styles.navButton}>Next</NavigationButton>
          <PositionIndicator className={styles.positionIndicator} />
        </Slide>
      </Carousel> */}

      <h2>Contact Form</h2>
      
      <ContactForm />
    </>
  );
}
