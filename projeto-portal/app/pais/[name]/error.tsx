'use client';

import Image from "next/image";
import Link from "next/link";

 export default function Error () {
    return (
        <section className="flex flex-col container">
            <h1 className="text-5xl text-center font-bold text-gray-800 my-16"> 
            😨 Erro ao exibir este país!
            </h1>
    
            <Link className="flex items-center py-2" href="/">
           
                <Image
                    src="/arrow-back.png"
                    alt="arrow-back"
                    width={24}
                    height={24}
                />
                Clique para voltar a página principal
             </Link>
        </section>
    )
 }