function Personagens( personagem ) {
  return (
    <div key={personagem.id}>
      <img src={personagem.image} />
      <h2>{personagem.name}</h2>
      <h2>{personagem.status}</h2>
      <h2>{personagem.species}</h2>
      <h2>{personagem.gender}</h2>
      <h2>{personagem.location}</h2>
      <h2>{personagem.origin}</h2>
    </div>
  );
}

export default Personagens;
