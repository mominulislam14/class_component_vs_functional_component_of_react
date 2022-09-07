
// class component card1 vs fuctional component card
function Card(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <h1>Muhammad sm.</h1>
        </div>
    );
}
export default Card;