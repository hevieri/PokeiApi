/**
 * Stats
 *
 * Página contenedor para el componente Pokedex. Es una capa fina
 * que mantiene aislada la navegación (App) de la lógica del Pokedex,
 * permitiendo que Pokedex funcione de forma independiente.
 */

import Pokedex from '../components/pokedex/Pokedex.jsx'

export default function Stats() {
  return (
    <section>
      <Pokedex />
    </section>
  )
}
