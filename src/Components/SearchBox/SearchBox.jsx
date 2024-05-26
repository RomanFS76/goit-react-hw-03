import css from "../SearchBox/SearchBox.module.css";

const SearchBox = () => {
  return (
    <>
    <label htmlFor="searchValue" className={css.label}>Find contacts by name</label>
    <input type="text" id="search" name="searchValue" />
    </>
  )
}

export default SearchBox