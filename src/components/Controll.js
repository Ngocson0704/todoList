import React, { Component } from 'react';
import Search from "./Search";
import Sort from "./Sort";

class Controll extends Component{

  render() {

    return (
        <div className="row mt-15">
                    <Search />
                    {/**Sort */}
                    <Sort />
        </div>
          );
  };
};

export default Controll;
