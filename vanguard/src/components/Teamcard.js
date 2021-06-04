import "../App.css";

const Teamcard = (props) => {
  return (
    <div className="teamMember">
      <div
        style={{ backgroundImage: `url(${props.photo})` }}
        className="teamMemberImage"
      ></div>
      <h3 className="teamMemberName">{props.name}</h3>
      <p className="teamMemberDescription">{props.description}</p>
    </div>
  );
};

export default Teamcard;
