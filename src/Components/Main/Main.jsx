import React, {useEffect, useState} from 'react'
import { Card } from '../Card/Card'

export const Main = () => {
    const URL= 'https://rickandmortyapi.com/api/character'
    const [contentApi, setContentApi] = useState([])

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setContentApi(data.results))
    },[])

  return (
    <main>
       {contentApi.map( character => <Card gender={character.gender} img={character.image} name={character.name} /> )}
    </main>
  )
}