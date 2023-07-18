import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useSearchCoinsQuery, useGetCryptoListQuery } from './api';
import { useState, useEffect } from 'react';
import { setSearchResults, setCountForPagination } from '../redux/AppBarSlice';
import { useDispatch } from 'react-redux';

export default function SearchInput() {
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
      };
      const handleInputChange = (event, value) => {
        if (!value) {
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
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        onInputChange={handleInputChange}
        onChange={(e) => {
                            handleSearch(e.target.value || e.target.textContent);
                        }}
        
        options={data ? data.data.map((option) => option.name) : []}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}
