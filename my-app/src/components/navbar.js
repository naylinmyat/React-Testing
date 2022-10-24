/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./cardsView"

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
// const navigation = [
//   { name: 'All', href: '#', current: true },
//   { name: 'Gaming', href: '#', current: false },
//   { name: 'Music', href: '#', current: false },
//   { name: 'Live', href: '#', current: false },
//   { name: 'Mixes', href: '#', current: false },
//   { name: 'CSS', href: '#', current: false },
//   { name: 'Playlists', href: '#', current: false },
//   { name: 'Songs', href: '#', current: false },
//   { name: 'Comedy', href: '#', current: false },
//   { name: 'Trailer', href: '#', current: false },
// ]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {

  const [navigation, setNavigation] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTab, setCurrentTab] = useState();
  const [current, setCurrent] = useState();
  const [genreResult, setGenreResult] = useState([]);
  
  const imgSrcValue = "https://image.tmdb.org/t/p/w500";

  const api_key = "cc2472c34bf325de9cc2dd5eb75b44e7";

  const searchMovie = (searchQuery) => {
    setCurrent();
    setGenreResult([]);
    const searchMovieUrl= `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`

    axios.get(searchMovieUrl)
        .then((data) => {
          console.log("Search", data)
          setSearchResult(data.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSearchResult([])
  }

  const tabsClickListener = (currentTab) => {
    clearSearch();

    console.log("currentTab",currentTab)

    const genreMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${currentTab}&with_watch_monetization_types=flatrate`;

      axios.get(genreMovieUrl)
          .then((datas) => {
            console.log("genreResult", datas)
            setGenreResult(datas.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
  };

  useEffect(() => {
    tabsClickListener(currentTab);
  },[currentTab])

	useEffect(() => {
		const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log("Genres", data);
				setNavigation(data.genres);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

  return (
    <Disclosure as="header" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="relative z-10 flex px-2 lg:px-0">
              </div>
              <div className="relative z-0 flex items-center justify-center flex-1 px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-400 bg-gray-700 border border-transparent rounded-md focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search"
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  onClick={() => searchMovie(searchQuery)}
                >
                  Search
                </button>

                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  onClick={() => clearSearch()}
                >
                  Clear
                </button>
                
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <button
                  type="button"
                  className="flex-shrink-0 p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative flex-shrink-0 ml-4">
                  <div>
                    <Menu.Button className="flex text-sm text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block py-2 px-4 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <nav className="hidden overflow-x-scroll lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
              {navigation.length > 0 ? (
                navigation.map((item,i) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setCurrentTab(item.id)
                      setCurrent(i)
                      console.log("id", item.id)
                      // tabsClickListener(currentTab)
                    }}
                    className={classNames(
                      current === i ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'select-none cursor-pointer rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))
              ) : (
                <p className='text-white'>Loading...</p>
              )}
            </nav>
          </div>

        {/* Search Result */}
        {searchResult.length < 1 && genreResult.length < 1 ?
           <Cards />:
           <div className="bg-gray-900">
           <div className="max-w-2xl px-4 py-4 mx-auto sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
             <h2 className="sr-only">Products</h2>
             {searchResult.length < 1 ? <h2 className='hidden'>{`Search Results for " ${searchQuery} "`}</h2> : <h2 className='mb-4 text-green-500'>{`Search Results for " ${searchQuery} "`}</h2> }
     
             <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {searchResult.length > 0 ? (
                searchResult.map((product) => (
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
              ) : (
                genreResult.map((product) => (
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
              )}
             </div>
           </div>
         </div>}

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md py-2 px-3 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{user.name}</div>
                  <div className="text-sm font-medium text-gray-400">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-2 mt-3 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
