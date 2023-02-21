import React from 'react'
import Privacy from "../../assets/img/Privacy.png";
import Terms from "../../assets/img/terms&cond.png";
import Domain from "../../assets/img/Domain.png";
import Invoice from "../../assets/img/Invoice.png";
import styles from "./products.module.css";

const Products = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>Try our other free products</div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.img}> <img src={Privacy} alt="" /></div>
                    <div className={styles.title}>Privacy Policy Generator</div>
                    <div className={styles.desc}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}> <img src={Terms} alt="" /></div>
                    <div className={styles.title}>Terms & Conditions Generator</div>
                    <div className={styles.desc}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}> <img src={Domain} alt="" /></div>
                    <div className={styles.title}>Domain Name Generator</div>
                    <div className={styles.desc}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}> <img src={Invoice} alt="" /></div>
                    <div className={styles.title}>Invoice Generator</div>
                    <div className={styles.desc}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
                </div>
            </div>
        </div>
    )
}

export default Products