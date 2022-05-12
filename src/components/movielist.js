import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    render() {
        return (
            <div className="container">
                <Movie {...
                    {id: 1,
                        key: 1,
                        title: 'Fast Five', 
                        summary: 'Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent',
                        poster: 'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/b2/b299ad862b6f12cb57679f0538eca514_500x735.jpg'}} />
                <Movie {...
                    {id: 2,
                        key: 2,
                        title: 'Mortal Kombat', 
                        summary: 'Three unknowing martial artists are summoned to a mysterious island to compete in a tournament whose outcome will decide the fate of the world.',
                        poster: 'https://www.bing.com/th?id=A20d29aa735fcdd20704cb23ca7407982&w=124&h=168&c=7&o=6&dpr=2&pid=SANGAM'}} />
                <Movie {...
                    {id: 3,
                        key: 3,
                        title: 'Alien', 
                        summary: 'The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg'}} />
                <Movie {...
                    {id: 4,
                        key: 4,
                        title: 'The Pacifier', 
                        summary: 'Having recovered from wounds received in a failed rescue operation, Navy SEAL Shane Wolfe is handed a new assignment: Protect the five Plummer kids from enemies of their recently deceased father -- a government scientist whose top-secret experiment remains in the kids house.',
                        poster: 'https://th.bing.com/th/id/OIP.aBMCCqbCYSPAOQ4UVcXWlAHaKj?pid=ImgDet&rs=1'}} />   
            </div>
        );
    }
}