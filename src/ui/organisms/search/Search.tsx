'use client'
 
import { useState, type ChangeEvent, useEffect } from 'react'
// import { useRouter } from 'next/navigation';
import { useQueryParameter, useReplaceQueryParameter } from '@/ui/organisms/search/queryParameters';

const SEARCH_QUERY_PARAM_NAME = 'query';
 
export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  
  const replaceQueryParameter = useReplaceQueryParameter();
  const search = useQueryParameter(SEARCH_QUERY_PARAM_NAME);
  // const router = useRouter();

  useEffect(() => {
      setInputValue(search || '');
  }, [search]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const setDebouncedQueryParameter = () => {
    if(inputValue.trim() === search) return;
    
    replaceQueryParameter({
      key: SEARCH_QUERY_PARAM_NAME,
      value: inputValue.trim() !== '' ? inputValue : undefined,
    });
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedQueryParameter();
    }, 1_000);

    return () => clearTimeout(delayInputTimeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
 
  return (
    <div className='flex items-center gap-2 ml-auto'>
      Search: 
      <input
        role="searchbox"
        className='px-2 text-black self-stretch'
        placeholder='search ...'
        value={inputValue}
        // onClick={() => router.push('/products/search')}
        onChange={onInputChange}
      />
    </div>
  );
}
