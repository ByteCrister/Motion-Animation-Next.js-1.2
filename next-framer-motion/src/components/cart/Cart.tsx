import { product } from "@/types/client-component"
import * as motion from "motion/react-client";
import Image from "next/image"

const Cart = ({ cart }: { cart: product }) => {

    const getDiscountedPrice = () => {
        return ((cart.price * (100 - cart.discountPercentage)) / 100).toFixed(2);
    };

    const discountedPrice = cart.discountPercentage && cart.discountPercentage !== 0 ? getDiscountedPrice() : null;

    return (
        <motion.div className="flex flex-col justify-around items-center px-3 py-2 rounded-xl bg-orange-200 hover:shadow-gray-500 hover:shadow-md"
            initial={{ x: 100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.2,
                delay: 0.3,
                type: "spring",
                stiffness: 50,
            }}>
            <div className="md:w-[60%] relative flex justify-center items-center ">
                <Image src={cart.images[0]} alt={cart.title} width={200} height={200}></Image>
                {discountedPrice && <span className="absolute top-[-10%]">Discount: {cart.discountPercentage}%</span>}
            </div>
            <div className="w-full flex justify-between">
                {discountedPrice && <span>{discountedPrice}</span>}
                <span className={discountedPrice ? "line-through" : ""}>{cart.price}</span>
            </div>
            <div>
                <span>{cart.title}</span>
            </div>
        </motion.div>
    )
}

export default Cart