function AuthorCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Country: {props.country}</p>
      <p>Famous Work: {props.book}</p>
    </div>
  );
}

export default AuthorCard;