import { useDispatch } from "react-redux"
import { outputFacts } from "../../../features/factsSlice/factsSlice";

export default function InputFacts() {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(outputFacts(e.target.value))
    }

    return (
        <input className="input-quantity-facts" type="number" pattern="[1-5]" title="Please enter a number between 1 and 5" defaultValue={0} onChange={handleChange}></input>
    )
}