import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemDispatchContext } from '../../context/ItemContext';
import { useFetchItems } from '../../hooks/useFetchItems';
import { ToggleState } from '../utils/ToggleState';
import { ItemCard } from './ItemCard';
import '../../assets/index.css';

export const ItemComponent = () => {

    const { data: items, loading } = useFetchItems();
    const [selected, setSelected] = useState(true);
    const setItemList = useContext(ItemDispatchContext);

    useEffect(() => {
        setItemList(items);
    })
    const toggle = () => {
        setSelected(!selected);
    }

    return (
        <div>
            <div className="top-container">
                <ToggleState
                    selected={selected}
                    toggle={toggle}
                />
                <Link to="/products/new"
                    className="btn btn-primary createbutton"
                >
                    Add new item
                </Link>
            </div>
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
        </div>
    )}
