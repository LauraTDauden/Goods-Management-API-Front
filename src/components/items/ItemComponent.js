import React, { useContext, useEffect, useState } from 'react';
import { ItemContext, ItemDispatchContext } from '../../context/ItemContext';
import { useFetchItems } from '../../hooks/useFetchItems';
import { ToggleState } from '../utils/ToggleState';
import { ItemCard } from './ItemCard';


export const ItemComponent = () => {

    const {data: items, loading} = useFetchItems();

    const [selected, setSelected] = useState(true);

    const setItemList = useContext(ItemDispatchContext);
    const itemList = useContext(ItemContext);
    useEffect(() => {
        setItemList(items);
    })

    const toggle = () => {
        setSelected(!selected);
    }

    return (
        <div>
            <ToggleState
                selected={selected}
                toggle={toggle}
            />
            {loading && <p>Loading...</p>}
            {/*console.log(itemList)*/}
            {
                items.map(item=>(
                    <ItemCard
                    key = {item.id}
                    {...item}
                    />
                   
                ))
            }
            
        </div>
    )
}
