function CardComponent(props) {
  return (
    <div id={props.cardId}>
      <h3 id={`titleH3 ${props.cardId}`}>{props.title}</h3>
      <input id={`inputTag ${props.cardId}`} type='text'></input>
      <h5>{props.subtitle}</h5>
      <p>{props.content}</p>
      <br />
      <button onClick={() => {
        let text = document.getElementById(`inputTag ${props.cardId}`).value
        let title = document.getElementById(`titleH3 ${props.cardId}`)
        title.textContent = text
      }}>{props.buttonText}</button>
      <button onClick={() => {
        let elem = document.getElementById(props.cardId)
        elem.remove();
      }}>Delete Me</button>
    </div>
  );
}

export default CardComponent