'use client';

function Error({error}) {
    console.log(error);
    
    return <main className="error">
        <h1>An error occured</h1>
    </main>
}

export default Error;