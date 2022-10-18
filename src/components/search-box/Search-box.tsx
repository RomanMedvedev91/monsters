import React from "react";
import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

export const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxProps) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
