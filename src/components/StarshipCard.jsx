
const StarshipCard = (props) => {
  return (
    <div>
      <h3>{props.starship.name}</h3>
      <p><strong>Class:</strong> {props.starship.starship_class}</p>
      <p><strong>Manufacturer:</strong> {props.starship.manufacturer}</p>
      <p><strong>Model:</strong> {props.starship.model}</p>
    </div>
  );
};

export default StarshipCard;
