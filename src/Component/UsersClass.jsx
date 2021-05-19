import React, { Component } from 'react';


export default class UsersClass extends Component {
    constructor(props) {
        super(props)
        this.state = {movies:[]}
    }

    componentDidMount() {
        fetch(" https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=5&order=by-opening-date&api-key=zQfPkfO0NAWwr1qW7G7U9CNfxUqCQ3JT ")

            .then((respond) => {
                return respond.json()
            })
            .then((jsonData) => {
                console.log(jsonData)
                this.setState({ movies: jsonData.results })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.movies.map((movies)=>{
                    return(
                        <div className="container">
                            <p><strong>Display title :</strong>{movies.display_title}</p>
                            <p><strong>Headline :</strong>{movies.headline}</p>
                            <p><strong>Critics pick :</strong>{movies.critics_pick}</p>
                            <p><strong>Byline :</strong>{movies.byline}</p>
                            <p><strong>Summary short :</strong>{movies.summary_short}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}