import Layoutt from "@/components/Layout";
import React from "react";
import Image from "next/image";

// Get pokemons
async function getData() {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  return res.json();
}

export default async function Home() {
  const data = await getData();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  const pokemons = data.results;


  return (
    <Layoutt>
      <div>
        <h1>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </Layoutt>
  );
}