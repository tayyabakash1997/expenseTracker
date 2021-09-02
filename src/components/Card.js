import './Card.css'
function Card(props){

return(
<div className="Card">{props.children} </div>
);
}
const className= 'Card ' + props.className;
export default Card: