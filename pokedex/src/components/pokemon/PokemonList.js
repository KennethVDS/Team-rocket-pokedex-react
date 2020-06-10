import React, { Component } from 'react';
import axios from 'axios';
import './List.css';
import ReactDOM from "react-dom";
import PokemonCard from './PokemonCard';
import charizard from './shiny-charizard.gif';
import Pagination from 'react-js-pagination';
//import RequestRateLimiter, { RequestsRequestHandler } from 'request-rate-limiter';


class PokemonList extends Component{
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon?offset=0 ',
        pokemon: null,
        activePage: 1
    };
    
    //const limiter = new RequestRateLimiter();
    //limiter.setRequestHandler(new RequestsRequestHandler());
    
    async componentDidMount() {
            const res = await axios.get(this.state.url);
            this.setState({ pokemon: res.data['results']});
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    render(){
        return(
            <React.Fragment>
                {this.state.pokemon ? (
                    <div className="row">
                    <img src={charizard} className= "Charizard" />
                    
                    {this.state.pokemon.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                    
                ))}
                </div>) : (
                    <h1>Loading Pokemon</h1>
                )}
                <hr></hr>
                <div className="row">
                    <div className="col-12 text-center">
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={20}
                            totalItemsCount={807}
                            onChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default PokemonList;