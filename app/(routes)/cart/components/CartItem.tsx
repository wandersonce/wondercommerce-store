"use client"

import Currency from "@/components/ui/Currency";
import IconButton from "@/components/ui/IconButton";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types"
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps{
  data: Product;
}

export default function CartItem({data} : CartItemProps) {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id)
  }

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image fill src={data.images[0].url} alt="" className="object-cover object-center"/>
      </div>
      <div className="relative flex flex-1 flex-col justify-between ml-4 sm:ml-6">
        <div className="absolute z-10 top-0 right-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-col-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>      
          </div>
          <div className="mt-1 flex text-sm">
              <p className="text-gray-500">{data.color.name}</p>
              <p className="text-gray-500 ml-4 border-gray-400 border-l pl-4 ">{data.size.name}</p>
          </div>
            <Currency value={data.price} />
        </div>
      </div>
    </li>
  )
}
