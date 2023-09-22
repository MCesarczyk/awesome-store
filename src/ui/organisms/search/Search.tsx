'use client'
 
import { type ChangeEvent } from 'react'
import { useQueryParameter, useReplaceQueryParameter } from '@/ui/organisms/search/queryParameters';

const SEARCH_QUERY_PARAM_NAME = 'search';
 
export const Search = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const search = useQueryParameter(SEARCH_QUERY_PARAM_NAME);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    replaceQueryParameter({
      key: SEARCH_QUERY_PARAM_NAME,
      value: event.target.value.trim() !== '' ? event.target.value : undefined,
    });
  };
 
  return  <div className='flex items-center gap-2 ml-auto'>
    Search: 
        <input
          className='px-2 text-black self-stretch'
          placeholder='search ...'
          value={search || ''}
          onChange={onInputChange}
        />
      </div>
}
