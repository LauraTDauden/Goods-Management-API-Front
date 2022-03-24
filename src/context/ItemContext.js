import { createContext, useState } from 'react'

const ItemContext = createContext();
const ItemDispatchContext = createContext();

const ItemProvider = ({children}) => {
    const [itemsList, setItemsList] = useState();
return (
    <ItemContext.Provider value = {itemsList}>
        <ItemDispatchContext.Provider value = {setItemsList}>
            {children}
        </ItemDispatchContext.Provider>
    </ItemContext.Provider>
);
}
export {ItemProvider, ItemContext, ItemDispatchContext};