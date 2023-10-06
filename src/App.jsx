import React from 'react'
import { Carousel, SuperMain } from './components'
import { Noticias } from './components/Noticias/Noticias'
import { EpisodiosRecientes } from './components/EpisodiosRecientes/EpisodiosRecientes'
import { UltimasSeries } from './components/UltimasSeries/UltimasSeries'
import { Comentarios } from './components/Comentarios/Comentarios'


export const App = () => {
  return (
    <>
     <div className="col">
     <SuperMain>
      <Carousel/>
      <Noticias/>
      <EpisodiosRecientes/>
      <UltimasSeries/>
      <Comentarios/>
      </SuperMain>
     </div>
    </>
  )
}
