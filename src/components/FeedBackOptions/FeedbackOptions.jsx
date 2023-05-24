export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => {
        const capitalizedOption = option[0].toUpperCase() + option.slice(1);

        return (
          <button
            key={option}
            type="button"
            name={option}
            onClick={event => onLeaveFeedback(event.target.name)}
          >
            {capitalizedOption}
          </button>
        );
      })}

      {/* <button type="button">Neutral</button>
      <button type="button">Bed</button> */}
    </div>
  );
}
