import {useState} from "react";
import NumbersList from "../../components/numbersList/NumbersList";
import {useDispatch} from "react-redux";
import {addNumberAction, clearNumbersAction} from "../../redux/actions";

const MainPage = () => {
  const dispatch = useDispatch();
  //я специально указал сдезь строку, а не число. Так надо
  const [number,setNumber] = useState('');
  const [prevNumber,setPrevNumber] = useState(0);
  const addNumber = () => {
    if(number) {
      const newNumber = +number + prevNumber;
      setPrevNumber(newNumber);
      dispatch((addNumberAction(newNumber)));
      clearInput();
    }
  }
  const clearNumbers = () => {
    dispatch(clearNumbersAction());
    setNumber('');
    setPrevNumber(0);
  }
  const clearInput = () => {
    setNumber('');
  }
  return(
    <>
      <input onChange={e=>setNumber(e.target.value.trim())} value={number} type="number" />
      <button onClick={addNumber}>add</button>
      <button onClick={clearNumbers}>clear</button>
      <NumbersList/>
    </>
  )
}
export default MainPage;