"use client";

import { product } from "@/types/client-component";
import axios from "axios";
import Image from "next/image";
import { use, useEffect, useState } from "react"

const CartView = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);
    const [cart, setCart] = useState<product>();

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setCart(await response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCart();
    }, [id]);

    return (
       cart &&  <div className="flex flex-col items-center gap-2 p-3 bg-orange-200">
       <Image src={cart.images[0]} alt={cart.title} height={100} width={100} ></Image>
       <span>{cart?.title}</span>
       <span>{cart?.description}</span>
       <span>{cart?.shippingInformation}</span>
   </div>
    )
}

export default CartView