import styles from './SearchBar.module.css'

export default function SearchBar({ query, onQueryChange, onScan, isLoading }) {
  return (
    <form className={styles.searchForm} onSubmit={onScan}>
      <label className={styles.searchBox}>
        <span className="sr-only">Buscar Pokémon</span>
        <input
          className={styles.input}
          type="search"
          placeholder="Nombre o ID"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </label>
      <button type="submit" className={styles.scanButton}>
        {isLoading ? 'Cargando...' : 'Scan'}
      </button>
    </form>
  )
}
