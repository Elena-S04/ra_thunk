import FactsList from "../FactsList/FactsList";
import InputFacts from "../InputFacts/InputFacts";

export default function StarWarsFacts() {
    return (
        <div className="starwars-facts">
            <h1 className="starwars-title">Факты о "Звездных войнах"</h1>
            <InputFacts />
            <FactsList />
        </div>
    )
}