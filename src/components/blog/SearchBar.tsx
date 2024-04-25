import { Input } from '../ui/input';
import { Button } from '../ui/button';
import SearchIcon from '@/assets/blog/search.png';

import { useState, useEffect, useRef } from 'react';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<CollectionEntry<'articles'>[]>();
  const [loading, setLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setLoading(true);

    const getArticles = setTimeout(async () => {
      const allArticles: CollectionEntry<'articles'>[] = await getCollection(
        'articles',
        ({ data }) => {
          if (search != '')
            return data.title.toLowerCase().includes(search.toLowerCase());
        }
      );

      setResults(allArticles);
      console.log(typeof results);
      console.log('Search results: ', results);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(getArticles);
  }, [search]);

  const handleClear = () => {
    if (searchRef.current != null) {
      searchRef.current.value = '';
      setSearch('');
    }
  };

  return (
    <section className='group'>
      <div className='font-montserrat flex py-8 border px-8 shadow-lg relative'>
        <Input
          ref={searchRef}
          type='text'
          placeholder='Search'
          onChange={(e) => setSearch(e.target.value)}
          className='placeholder:text-sm bg-[#F4F5F0] rounded-none py-[1.93rem] pl-8 z-20 pr-16'
        />

        <Button className='rounded-none bg-[--clr-green-01] p-8'>
          <img src={SearchIcon.src} alt='' className='scale-150' />
        </Button>

        <Button
          className={`absolute z-20 right-28 top-11 hover:bg-gray-600/10 transition-none ${
            search === '' ? 'hidden' : 'block'
          }`}
          variant={'ghost'}
          onClick={handleClear}
        >
          X
        </Button>
      </div>
      {search != '' && (
        <div className='px-8 pt-4 '>
          {loading ? (
            <p className='text-[--clr-font] font-montserrat font-medium text-sm'>
              Loading..
            </p>
          ) : (
            <ul className='divide-y-2'>
              {results?.length != 0 && results != undefined ? (
                results.map((result) => (
                  <li key={result.id} className='py-2'>
                    <a
                      href={result.slug}
                      className='text-[--clr-font] font-montserrat font-medium text-sm'
                    >
                      {result.data.title}
                    </a>
                  </li>
                ))
              ) : (
                <li className='text-[--clr-font] font-montserrat font-medium text-sm'>
                  No results.
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
