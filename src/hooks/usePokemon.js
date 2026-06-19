/**
 * usePokemon
 *
 * Hook personalizado que gestiona todo el estado relacionado con la
 * carga de datos de Pokémon desde la PokéAPI. Se encarga de:
 *   - Mantener el ID del Pokémon activo y permitir navegación (prev/next)
 *   - Ejecutar la búsqueda por nombre o ID mediante el formulario
 *   - Gestionar estados de carga (isLoading) y error
 *   - Actualizar el Pokémon activo cada vez que cambia activeId vía useEffect
 *
 * La función clampPokemonId asegura que el ID nunca salga del rango
 * 1..maxPokemonId (1010), con comportamiento wrap-around.
 *
 * Returns:
 *   { pokemon, query, setQuery, isLoading, error, handlePrev, handleNext, handleScan }
 */

import { useEffect, useState } from 'react'
import { clampPokemonId, loadFromPokeApi } from '../components/pokedex/pokedexData.js'

export default function usePokemon(initialId = 1) {
  const [activeId, setActiveId] = useState(initialId)
  const [pokemon, setPokemon] = useState(null)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadCurrentPokemon = async () => {
      setIsLoading(true)
      setError('')

      try {
        const remotePokemon = await loadFromPokeApi(activeId)
        setPokemon(remotePokemon)
      } catch (err) {
        setPokemon(null)
        setError('No se pudo cargar el Pokémon.')
      } finally {
        setIsLoading(false)
      }
    }

    loadCurrentPokemon()
  }, [activeId])

  const handlePrev = () => {
    setActiveId((prevId) => clampPokemonId(prevId - 1))
    setQuery('')
  }

  const handleNext = () => {
    setActiveId((prevId) => clampPokemonId(prevId + 1))
    setQuery('')
  }

  const handleScan = async (event) => {
    event.preventDefault()
    const cleanQuery = query.trim()
    if (!cleanQuery) {
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const remotePokemon = await loadFromPokeApi(cleanQuery)
      setPokemon(remotePokemon)
      setActiveId(remotePokemon.id)
    } catch (err) {
      setError('Pokémon no encontrado. Prueba con nombre o ID válido.')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    pokemon,
    query,
    setQuery,
    isLoading,
    error,
    handlePrev,
    handleNext,
    handleScan,
  }
}
