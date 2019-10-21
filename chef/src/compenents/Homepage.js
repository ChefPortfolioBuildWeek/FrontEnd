import React from "react";
import axios from "axios";
import HomepageCards from "./HomepageCards.js";
import { NavLink } from "react-router-dom";
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Recipe: null
    };
  }

  componentDidMount() {
    this.fetchRecipe(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchRecipe(newProps.match.params.id);
    }
  }

  fetchRecipe = id => {
    axios
      .get(``)
      .then(res => this.setState({ recipe: res.data }))
      .catch(err => console.log(err.response));
  };

  saveRecipe = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.recipe);
  };

  deleteRecipe = id => {
    axios.delete(``).catch(err => {
      console.log(err.response);
    });
    this.props.history.push("/");
  };
  render() {
    if (!this.state.recipe) {
      return <div>Loading recipe information...</div>;
    }

    return (
      <div className="save-wrapper">
        <HomepageCards recipe={this.state.recipe} />
        <div className="save-button" onClick={this.saverecipe}>
          Save
        </div>
        <button
          onClick={() => this.deleteRecipe(this.state.recipe.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    );
  }
}
