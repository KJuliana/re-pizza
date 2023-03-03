import React from 'react';
import BasketItem from '../../components/BasketItem/BasketItem';
import Layout from "../../components/Layout/Layout";
import {useAppSelector} from "../../hooks/redux";
import styles from "./index.module.css";
import CatalogList from "../../components/Catalog/Catalog";
import {useBasketTotalCost} from "../../hooks/useBasketTotalCost";
import {useBasketItemCount} from "../../hooks/useBasketItemCount";
import Button from "../../components/UI/Button/Button";

const Basket = () => {
    const {basket} = useAppSelector(state => state);

    const totalPrice = useBasketTotalCost();
    const totalCount = useBasketItemCount();

    return (
        <Layout>
            {
                Object.keys(basket).length !== 0
                    ?
                        <div className={styles.root}>
                            <div className={styles.basketList}>
                                <h1>Корзина</h1>
                                {Object.entries(basket).map(([productId, count]) =>
                                    <BasketItem key={productId} id={Number(productId)} count={count}/>
                                )}
                            </div>
                            <div className={styles.orderWrapper}>
                                <div>
                                    Всего товаров: {totalCount}
                                </div>
                                <div>
                                    Итого: {totalPrice}
                                </div>
                                <Button tag='button' option='buttonBuy'>Заказать</Button>
                            </div>
                        </div>
                    : <h1>Корзина пуста</h1>
            }
            <h3>Вам может быть интересно</h3>
            <CatalogList/>

        </Layout>
    );
};

export default Basket;