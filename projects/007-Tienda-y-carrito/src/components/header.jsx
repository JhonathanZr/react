import { Filter } from "./Filter"

export function Header ({category}) {
    return(
        <header className="header">
            <h1>React Shop🛒</h1>
            <Filter
            category={category}/>
        </header>

    )
}