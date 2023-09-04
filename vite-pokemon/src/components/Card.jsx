import React from 'react';

const Card = () => {
  return (
    <article className='card rounded-none'>
      <img src="src/assets/images/bg-pattern-card.svg" alt="imagen header card" className="card-header" />
      <div class="card-body">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg" alt="imagen de vitoko" class="card-body-img"></img>
      </div>
    </article>
  );
};

export default Card;
