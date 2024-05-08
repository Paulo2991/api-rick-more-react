import { useEffect, useState } from "react";
import * as S from "./personagens-list";
import axios from "axios";
import Personagens from "../Personagens/Personagens";

function PersonagensList() {
  const [charactes, setCharactes] = useState([]);
  const [search,setSearch] = useState("");
  
  async function fecthData() {
    try {
      await axios
        .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
        .then((response) => {
          setCharactes(response.data.results);
        });
    } catch (error) {
      console.log("Api não carregou os dados", error);
    }
  }

 useEffect(() => { 
      fecthData();
  [search]});


  return (
    <>
      <S.Main>
        <h1>Api Rick More</h1>
        <S.Input>
          <label htmlFor="search">Pesquisar Personagem</label>
          <input
            type="text"
            id="search"
            name="search"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
        </S.Input>
        <S.CardPersonagem>
          {charactes.map((personagem) => {
            return (
              <S.CardsPersonagens key={personagem.id}>
                <Personagens
                  image={personagem.image}
                  name={personagem.name}
                  status={personagem.status}
                  species={personagem.species}
                  gender={personagem.gender}
                  location={personagem.location.name}
                  origin={personagem.origin.name}
                />
              </S.CardsPersonagens>
            );
          })}
        </S.CardPersonagem>
      </S.Main>
    </>
  );
}

export default PersonagensList;
