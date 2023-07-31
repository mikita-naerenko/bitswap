
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const SearchInputAutocomplete = ({ data, handleInputChange, handleSearch }) => {

      return (
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          onInputChange={(event) => handleInputChange(event)}
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
      );
}

export default SearchInputAutocomplete;



