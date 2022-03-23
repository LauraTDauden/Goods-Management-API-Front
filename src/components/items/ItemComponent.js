import React from 'react';
import { useFetchItems } from '../../hooks/useFetchItems';


export const ItemComponent = () => {

    const {data: items, loading} = useFetchItems();

    return (
        <div>
            {loading && <p>Loading...</p>}
            {
                items.map(item=>(
                    <div
                    key = {item.id}>
                        <h4>{item.code}</h4>
                        <p>{item.description}</p>

                    </div>
                ))
            }
            
        </div>
    )
}
