import React from 'react';
import styles from "./BasketItem.module.css"
import ProductCounter from "../ProductCounter/ProductCounter";
import {useDough} from "../../hooks/useDough";
import {useSize} from "../../hooks/useSize";

export interface BasketItemProps {
    id: string,
    image: string,
    name: string,
    cost: number,
    shoppingItemId: string,
    dough?: number,
    size?: number
}

const BasketItem = ({id, image, name, cost, shoppingItemId, dough, size}: BasketItemProps) => {
    let doughName = '';
    let sizeName = '';
    if (dough) {
        const convert = useDough();
        doughName = convert(String(dough));
    }

    if (size) {
        const convert = useSize();
        sizeName = convert(String(size));
    }

    return (
        <div className={styles.root}>
            <div className={styles.information}>
                <img className={styles.image} src={image} alt={name}/>
                <div className={styles.nameWrapper}>
                    <div className={styles.name}>{name}</div>
                    {doughName && <div className={styles.notes}>{doughName}</div>}
                    {sizeName && <div className={styles.notes}>{sizeName}</div>}
                </div>
            </div>
            <div className={styles.options}>
                <ProductCounter id={id} shoppingItemId={shoppingItemId} isBasketItem={true}/>
            </div>
            <span className={styles.price}>{cost} ₽</span>
        </div>
    );
};

export default BasketItem;