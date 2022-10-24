/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
//     {
//       id: 1,
//       name: 'a yar yar char nar ll',
//       href: '#',
//       price: 'G Latt',
//       imageSrc: 'https://i.ytimg.com/vi/a06wNxZqJyQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDuZu0p_hKhqim25Nh2Vx4IKEMiIg',
//       imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     },
//     {
//       id: 2,
//       name: 'React Story Book 4.2',
//       href: '#',
//       price: 'Code Volution',
//       imageSrc: 'https://i.ytimg.com/vi/qahOOsqiz1c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqxL3FPo2vC6-GbsoFz8-CgamYxQ',
//       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//     },
//     {
//       id: 3,
//       name: 'December',
//       href: '#',
//       price: 'A Nge',
//       imageSrc: 'https://i.ytimg.com/vi/pERJFRrU-cs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPv5nz8dfIvZ5m4iixm7t7sfQe4A',
//       imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//       id: 4,
//       name: 'Diary',
//       href: '#',
//       price: 'Lay Phyu',
//       imageSrc: 'https://i.ytimg.com/vi/LwA5YGi__as/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnPaxKdnr2w1DEh-xwg4xFJTKoLA',
//       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     {
//         id: 5,
//         name: 'Kyay Kwel Nae Nya Tway',
//         href: '#',
//         price: 'Song Oo Hlaing',
//         imageSrc: 'https://i.ytimg.com/vi/796c2iOp7dQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCDQW_N-gAl3I9rshsnkk0foAi2kw',
//         imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//       },
//       {
//         id: 6,
//         name: 'Tha Seain',
//         href: '#',
//         price: 'Big Bag',
//         imageSrc: 'https://i.ytimg.com/vi/NNV8cXv3VIM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDUG2hB5--vyJMPBQRE9Mc1AiZ98Q',
//         imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//       },
//       {
//         id: 7,
//         name: 'Let Her Go',
//         href: '#',
//         price: 'Passenger',
//         imageSrc: 'https://i.ytimg.com/vi/FS3WACQHVU0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_yQP4eLna9KpN-2XrejoAlaLVvQ',
//         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//       },
//       {
//         id: 8,
//         name: 'PayPhone',
//         href: '#',
//         price: 'Maroon 5',
//         imageSrc: 'https://i.ytimg.com/vi/Fpo33RSPMuc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj-j554E6fD2BegGw--ZK2v6fnQw',
//         imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//       },
//     // More products...
//   ]

  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import Loading from "./Loading";
  
  export default function Cards() {

    const [products, setProducts] = useState([]);
    const imgSrcValue = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
      const api_key = "cc2472c34bf325de9cc2dd5eb75b44e7";
      const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`;
      axios.get(url)
        .then((data) => {
          console.log("HELLO", data);
          setProducts(data.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return (
      <div className="bg-gray-900">
        <div className="max-w-2xl px-4 py-4 mx-auto sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.length > 0 ? (
                          products.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                  src={`${imgSrcValue}${product.poster_path}`}
                                  className="object-cover object-center w-full h-[180px] group-hover:opacity-75"
                                />
                              </div>
                              <h3 className="mt-4 text-sm text-gray-300">{product.title}</h3>
                              <p className="mt-1 text-lg font-medium text-white">{product.release_date}</p>
                            </a>
                          ))
            ) : <Loading />}
          </div>
        </div>
      </div>
    )
  }
  