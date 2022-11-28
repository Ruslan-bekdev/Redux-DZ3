import {useSelector} from "react-redux";

const NumbersList = () => {
  const numbers = useSelector(state=>state.numbersReducer.numbers);
  return(
    <ul>
      {
        numbers.map((number,index) => <li key={index}>{number}</li>)
      }
    </ul>
  )
}

export default NumbersList;