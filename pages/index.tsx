import React, { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        fetch('/api/games/1?fields=name', {
            method: 'GET',
        }).then(res => {
            return res.json();
        }).then(games => {
            console.log(games)
        })
    }, []);

    return (
        <div>It works!</div>
    )
};

export default Home;