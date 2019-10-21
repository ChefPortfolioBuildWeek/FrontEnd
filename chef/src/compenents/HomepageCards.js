import React from "react";

const HomePageCard = props => {
  const { recipes, chef, title } = props.movie;
  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <div className="recipe-chef-name">
        Chef: <em>{recipes}</em>
      </div>
      <div className="recipes">
        Recipes : <strong>{recipes}</strong>
      </div>
      <h3>Chefs</h3>

      {recipes.map(chef => (
        <div key={chef} className="recipes-chef">
          {chef}
        </div>
      ))}
    </div>
  );
};

export default HomePageCard;
