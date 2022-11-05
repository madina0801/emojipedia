function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.aria}>
          {props.emoji}
        </span>
        <span>{props.emojiName}</span>
      </dt>
      <dd>{props.emojiDescription}</dd>
    </div>
  );
}

export default Entry;
