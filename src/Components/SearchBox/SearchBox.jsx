import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({value,onFilter}) => {
  return (
    <>
    <div className={css.searchWrapper}>
      <p className={css.label}>Find contacts by name</p>
      <input type="text"  value={value} onChange={ (еvent) => onFilter(еvent.target.value)} />
    </div>
    </>
  )
}

export default SearchBox