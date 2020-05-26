import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

export default function Filters({ setFilterBy, props }) {


    const { filterBy, dispatch } = useContext(ProductContext)

    const [checkedItems, setCheckedItems] = useState({ 'vegtabels': false, 'fruits': false, 'herb': false, 'special': false })


    async function setFilters(ev) {
        let { name } = ev.target

        const labelFilters = [...filterBy.label];
        try {
            if (ev.target.checked) {
                labelFilters.push(ev.target.name)
                setCheckedItems({ ...checkedItems, [name]: true })
            } else {
                setCheckedItems({ ...checkedItems, [name]: false })
                const idx = filterBy.label.findIndex(filter => filter === ev.target.name)
                labelFilters.splice(idx, 1)
            }
            dispatch({ type: 'SET_FILTER', labelFilters })
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        setCheckedItems({ vegtabels: false, fruits: false, herb: false, special: false })
        return () => {
        }
    }, [filterBy.title])

    return (

        <div className="filters container flex justify-center">
            <div className="toggle-switch flex">
                <div className="filter-title">vegtebales</div>
                <div>
                    <input type="checkbox" className="toggle-switch-checkbox" name="vegtabels" id="veg" checked={checkedItems.vegtabels} onChange={setFilters} />
                    <label className="toggle-switch-label" htmlFor="veg">
                        <span className="toggle-switch-inner"></span>
                        <span className="toggle-switch-switch vegtebales"></span>
                    </label>
                </div>
            </div>
            <div className="toggle-switch flex ">
                <div className="filter-title">fruit</div>
                <input type="checkbox" className="toggle-switch-checkbox" name="fruits" id="fruit" checked={checkedItems.fruits} onChange={setFilters} />
                <label className="toggle-switch-label" htmlFor="fruit">
                    <span className="toggle-switch-inner"></span>
                    <span className="toggle-switch-switch fruits"></span>
                </label>
            </div>
            <div className="toggle-switch flex ">
                <div className="filter-title">herbs</div>
                <input type="checkbox" className="toggle-switch-checkbox" name="herb" id="herb" checked={checkedItems.herb} onChange={setFilters} />
                <label className="toggle-switch-label" htmlFor="herb">
                    <span className="toggle-switch-inner"></span>
                    <span className="toggle-switch-switch herb"></span>
                </label>
            </div>
            <div className="toggle-switch flex ">
                <div className="filter-title">star</div>
                <input type="checkbox" className="toggle-switch-checkbox" id="star" name="special" checked={checkedItems.special} onChange={setFilters} />
                <label className="toggle-switch-label" htmlFor="star">
                    <span className="toggle-switch-inner"></span>
                    <span className="toggle-switch-switch star"></span>
                </label>
            </div>
        </div>

    )
}




