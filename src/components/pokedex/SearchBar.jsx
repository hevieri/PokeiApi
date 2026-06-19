/**
 * SearchBar
 *
 * Componente de formulario para buscar Pokémon por nombre o ID.
 * Renderiza un input de búsqueda y un botón "Scan" que dispara la
 * búsqueda al hacer submit. El submit se maneja desde el padre
 * (DataFrame / usePokoon) mediante la prop onScan.
 *
 * Props:
 *   - query {string}: Valor actual del input (controlado por el padre).
 *   - onQueryChange {function}: Callback que se dispara al escribir.
 *   - onScan {function}: Callback que se dispara al enviar el formulario.
 */

import styles from './SearchBar.module.css'

export default function SearchBar({ query, onQueryChange, onScan }) {
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
        Scan
      </button>
    </form>
  )
}
