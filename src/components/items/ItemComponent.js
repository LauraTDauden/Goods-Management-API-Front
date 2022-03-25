import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {ItemDispatchContext } from '../../context/ItemContext';
import { useFetchItems } from '../../hooks/useFetchItems';
import { ToggleState } from '../utils/ToggleState';
import { ItemCard } from './ItemCard';

import '../../assets/index.css';


export const ItemComponent = () => {

    const { data: items, loading } = useFetchItems();

    const [selected, setSelected] = useState(true);

    const setItemList = useContext(ItemDispatchContext);
    //const itemList = useContext(ItemContext);
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
            {
                selected &&
                items.map(item => (
                    item.state == 'ACTIVE' &&
                    <ItemCard
                        key={item.id}
                        {...item}
                    />

                ))

            }
            {
                !selected &&
                items.map(item => (
                    item.state == 'DISCONTINUED' &&
                    <ItemCard
                        key={item.id}
                        {...item}
                    />

                ))

            }

            <Link to="/products/new"
                className="btn btn-primary createbutton"
            >
                Add new item
                </Link>

        </div>
    )
}
