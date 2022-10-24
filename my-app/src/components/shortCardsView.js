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
const products = [
    {
      id: 1,
      name: 'Why',
      href: '#',
      price: 'Double J',
      imageSrc: 'https://i.ytimg.com/vi/Dc_iCyAr9Kw/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBqV9hbScHw54VTXPnMGB3-9edAVQ',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: '1911 Magnum',
      href: '#',
      price: 'Gun',
      imageSrc: 'https://i.ytimg.com/vi/6Fk87NJZYCE/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAoETOX1uVpRklcA3zoI0sPQAkkzg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'LISA Dance',
        href: '#',
        price: 'Lisa',
        imageSrc: 'https://i.ytimg.com/vi/gCX1OzE404I/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCm9E0Y33wwWwJMP8nJASSli5LpiA',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 4,
        name: '#Dj Show',
        href: '#',
        price: 'Dj',
        imageSrc: 'https://i.ytimg.com/vi/cvuMHXy8iVQ/hq720_2.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLC5zz0t451rXeoVssyo8KaeHDhu-A',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
    // More products...
  ]
  
  export default function ShortCards() {
    return (
      <div className="bg-gray-900">
        <h2 className="text-3xl font-medium text-white ml-8 pt-4">Short</h2>
        <div className="mx-auto max-w-2xl py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-300">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-white">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  