"use client";

import { product } from "@/types/client-component";
import axios from "axios";
import { useEffect, useState } from "react"
import Cart from "./Cart";
import Link from "next/link";

const Carts = () => {
    const [CartsData, setCartsData] = useState<product[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setCartsData(await response.data.products);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <section className="w-full h-screen p-3 flex flex-wrap gap-2">
            {
                CartsData && CartsData?.map((cart, index) => {
                    return <Link key={index} href={`/carts/${cart.id}`}><Cart cart={cart} /></Link>
                })
            }
        </section>
    )
}

export default Carts