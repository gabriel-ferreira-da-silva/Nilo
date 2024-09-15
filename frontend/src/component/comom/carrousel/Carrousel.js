import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ItemHolder from '../ItemCard/ItemHolder'
import { fetchProductsBatch } from "../../../services/ProductService";

export function ItemCarrousel(){
    const [trioArray, setTrioArray] = useState([])

    useEffect(() => {
        const fetchTrio = async () => {
            const trio1 = await fetchProductsBatch(2, 3);
            const trio2 = await fetchProductsBatch(3, 3);
            setTrioArray([trio1, trio2])
            console.log(trioArray)
        }

        fetchTrio();
    }, [])

    return (
        <div style={{ display: 'block', padding: 30 }}>
            <h4>Products you may like </h4>
            <Carousel>
                {trioArray.map((trio, index) => (
                    <Carousel.Item interval={5000} key={index}>
                            <ItemHolder key={index} products={trio} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
