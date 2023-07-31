import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useSearchCoinsQuery, useGetCryptoListQuery } from '../../../../services/api';
import { useState, useEffect } from 'react';
import { setSearchResults, setCountForPagination } from '../../../../redux/AppBarSlice';
import { useDispatch } from 'react-redux';
import SearchInputAutocomplete from './SearchInputAutocomplete';

const SearchInput = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [userInteracted, setUserInteracted] = useState(false);
    const { data: searchResults, isLoading, isError } = useSearchCoinsQuery(searchQuery, {
        skip: !userInteracted, // Skip the initial query if userInteracted is false
      });
    const { data } = useGetCryptoListQuery({offset: 0, limit: 1000});
    const handleSearch = (searchQuery) => {
        setUserInteracted(true);
        setSearchQuery(searchQuery);
        if (!searchQuery) {
          setUserInteracted(true);
          setSearchQuery('');
        }
      };
      const handleInputChange = (event) => {
        if (!event.target.value) {
          setUserInteracted(true);
          setSearchQuery('');
        }
      };

    useEffect(() => {
        if (userInteracted) {
          // Update the state with search results only when the user has interacted with the input
          dispatch(setSearchResults(searchResults));
          if (searchResults) {
            dispatch(setCountForPagination(searchResults.data.length));
          }
          
        }

        if (!searchQuery) {
            // Clear state of search results if search query has been cleared
            dispatch(setSearchResults(null));
          }
      }, [userInteracted, searchResults, searchQuery, dispatch]);


  return (
    <Stack spacing={1} sx={{ width: 200 }}>
      <SearchInputAutocomplete data={data} 
                               isLoading={isLoading}
                               isError={isError}
                               handleSearch={handleSearch} 
                               handleInputChange={handleInputChange}/>
    </Stack>
  );
}

export default SearchInput;