function Listofdata(Props) {
  return (
    <li>
      <img src={Props.image} alt={Props.title} />
      <h3>{Props.title}</h3>
      <p>{Props.description}</p>
    </li>
  );
}

export default Listofdata