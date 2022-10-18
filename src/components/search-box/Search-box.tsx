import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
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
