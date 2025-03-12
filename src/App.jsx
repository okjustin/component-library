import FlipCard from "./components/FlipCard/FlipCard";
// import styles from "./App.module.scss";

export default function App() {
  return (
    <>
      <h2>Flip card</h2>

      <FlipCard>
        <div>
          <h3>Front Title</h3>
          <p>Front Description</p>
        </div>
        <div>
          <p>Back content here</p>
        </div>
      </FlipCard>
    </>
  );
}
