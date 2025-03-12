import FlipCard from "./components/FlipCard/FlipCard";
// import styles from "./App.module.scss";

export default function App() {
  return (
    <>
      <h2>Flip card</h2>

      <FlipCard>
        <FlipCard.Front>
          <h3>Front Title</h3>
          <p>Front Description</p>
        </FlipCard.Front>
        <FlipCard.Back>
          <p>Back content here</p>
        </FlipCard.Back>
      </FlipCard>

    </>
  );
}
