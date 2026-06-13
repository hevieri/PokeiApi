import SearchBar from './SearchBar'
import StatRow from './StatRow'
import styles from './DataFrame.module.css'

const visibleStats = ['HP', 'ATK', 'DEF']

export default function DataFrame({ pokemon, query, onQueryChange, onPrev, onNext, onScan, isLoading, error }) {
  return (
    <section className={styles.dataFrame}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <p className={styles.subtitle}>Controles</p>
          <h3 className={styles.title}>Datos</h3>
        </div>
        <div className={styles.buttonRow}>
          <button type="button" onClick={onPrev} className={styles.controlButton}>
            Prev
          </button>
          <button type="button" onClick={onNext} className={styles.controlButton}>
            Next
          </button>
        </div>
      </div>

      <div className={styles.statList}>
        {visibleStats.map((name) => (
          <StatRow key={name} label={name} value={pokemon.stats?.[name] ?? 0} />
        ))}
      </div>

      <div className={styles.movesSection}>
        <div className={styles.movesHeader}>
          <span className={styles.subtitle}>Poderes</span>
          <span className={styles.typeLabel}>{pokemon.types?.[0] ?? 'Normal'}</span>
        </div>
        <div className={styles.movesGrid}>
          {pokemon.moves?.map((move) => (
            <span key={move} className={styles.moveChip}>
              {move}
            </span>
          ))}
        </div>
      </div>

      <SearchBar query={query} onQueryChange={onQueryChange} onScan={onScan} isLoading={isLoading} />

      {error ? <p className={styles.error}>{error}</p> : null}
  )
}
