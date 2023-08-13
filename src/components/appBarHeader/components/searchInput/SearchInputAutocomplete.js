
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search'; 

const SearchInputAutocomplete = ({ data, handleInputChange, handleSearch }) => {


      return (
        <Autocomplete
          freeSolo
          disableClearable
          id="free-solo-2-demo"
          onInputChange={(event) => handleInputChange(event)}
          onChange={(e) => {
            handleSearch(e.target.value || e.target.textContent);
          }}
          options={data ? data.data.map((option) => option.name) : []}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              InputProps={{
                ...params.InputProps,
                type: 'search',
                // startAdornment: (
                //   <SearchIcon sx={{ color: 'white' }} fontSize="small" /> 
                // ),
              }}
            />
          )}
        />
      );
}

export default SearchInputAutocomplete;



