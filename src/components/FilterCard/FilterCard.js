import React from "react";
import styled from "styled-components";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Clear } from "@material-ui/icons";

const Container = styled.div`
  width: 25%;
`;

function FilterCard({ id, name, filterStateSet, filterValue, placeholder }) {
  function handleChange(e) {
    filterStateSet(e.target.value);
  }

  return (
    <Container>
      <TextField
        id={id}
        type="text"
        label={name}
        value={filterValue}
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                id="clear-search"
                onClick={() => {
                  filterStateSet("");
                }}
                edge="end"
              >
                {filterValue !== "" && <Clear />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}

export default FilterCard;
