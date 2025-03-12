import FlipCard from "./components/FlipCard";

export default function App() {
  return (
    <>
      <h2>Flip card</h2>

      <div className="card-container">
        <FlipCard>
          <FlipCard.Front>
            <div className="side">
              <h1>Front</h1>

              <p>This is the front of the card</p>
            </div>
          </FlipCard.Front>
          <FlipCard.Back>
            <div className="side">
              <h1>Back</h1>

              <p>This is the back of the card</p>
            </div>
          </FlipCard.Back>
        </FlipCard>
      </div>
    </>
  );
}