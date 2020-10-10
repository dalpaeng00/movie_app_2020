import React from "react";
import axios from "axios";
import "./Home.css";
import List from "../component/List";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovie = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "http://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({
      movies,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loder">
            <span className="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <List
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;