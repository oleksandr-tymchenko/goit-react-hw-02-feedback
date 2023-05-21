export default function FeedbackOptions({ onEncrement }) {
  return (
    <div>
      <button type="button" name="good" onClick={onEncrement}>
        Good
      </button>
      <button type="button">Neutral</button>
      <button type="button">Bed</button>
    </div>
  );
}
