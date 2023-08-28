"use client"

import { Product } from "@/types"
import Image from "next/image";
import IconButton from "./IconButton";
import {Expand, ShoppingCart} from 'lucide-react';
import Currency from "./Currency";
import { useRouter } from "next/navigation";

interface ProductCardProps{
  data:Product;
}

export default function ProductCard({data} : ProductCardProps) {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  }
  
  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image className="aspect-square object-cover rounded-md" alt={data?.name} src={data?.images?.[0]?.url} fill />
      <div className="opacity-0 group-hover:opacity-100 transition  absolute w-full px-6 bottom-5">
        <div className="flex gap-x-6 justify-center">
          <IconButton onClick={() => {}} icon={<Expand />}/>
          <IconButton onClick={() => {}} icon={<ShoppingCart />}/>
        </div>
      </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">
          {data.category?.name}
        </p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}
