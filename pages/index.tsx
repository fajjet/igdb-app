import React, { useEffect } from 'react';

const Home = () => {

    const fetchData = async () => {

        const result = await fetch('/api/feed', {
            method: 'POST',
        });

        return await result.json();
    };

    useEffect(() => {

        fetchData().then(res => {
            console.log(res)
        })

    }, []);

    return (
        <div>It works!</div>
    )
};

export default Home;
