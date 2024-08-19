import { Filter } from "./Filter"
import { CartIcon } from "./icons"

export function Header ({category, changeFilter}) {
    return(
        <header className="header">
            <h1>React Shop🛒</h1>
            <Filter
            changeFilter={changeFilter}
            category={category}/>
        </header>

    )
}