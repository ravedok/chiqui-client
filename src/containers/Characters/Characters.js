import React, { Component } from "react";
import { Get } from "react-axios";

import { Container } from "../../shared";

class Characters extends Component {
  render() {
    return (
      <Container>
        <h1>Personajes</h1>
        <Get url="https://rickandmortyapi.com/api/character/">
          {(error, response, isLoading, onReload) => {
            if (error) {
              console.log(error);
              return (
                <div>
                  Something bad happened: {error.message}{" "}
                  <button
                    onClick={() => onReload({ params: { reload: true } })}
                  >
                    Retry2
                  </button>
                </div>
              );
            } else if (isLoading) {
              return <div>Loading...</div>;
            } else if (response !== null) {
              return (
                <div>
                  {response.data.message}{" "}
                  <button
                    onClick={() => onReload({ params: { refresh: true } })}
                  >
                    Refresh
                  </button>
                </div>
              );
            }
            return <div>Default message before request is made.</div>;
          }}
        </Get>
      </Container>
    );
  }
}

export default Characters;
