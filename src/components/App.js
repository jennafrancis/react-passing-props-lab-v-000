import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  handleChange = event => {
    this.setState({currentFilter: event.target.value})
  }

  render() {
    return(
      <FruitBasket fruit={this.state.fruit} filter={this.state.currentFilter} updateFilterCallback={this.handleChange}/>
    )
  }
}
