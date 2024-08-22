import { useContext } from "react";
import { CartContext } from "../context/Cart";

export function useCart () {
    const context = useContext(CartContext)
    if(context === undefined){
        throw new Error('useCart undefined')
    }
    return context
}