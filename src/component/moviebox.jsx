const MovieBox = (props) => {
    //To take the user to wiki page of movies
    const filmlink = "https://en.wikipedia.org/wiki/"+ props.title.split(" ").join("_")+"_";
    return (
        <>
            <div className="card m-2" style={{ width: '18rem', backgroundColor:'inherit' }} key={Math.random()}>
                    <img src={props.poster} className="card-img-top" alt="..." />
               
                <div className="card-body">
                    <h5 className="card-title"><a href={filmlink} target="_blank" rel="noreferrer">Title:{props.title}</a></h5>
                    <p>Year:{props.year}</p>
                    <p>Runtime:{props.runtime} mins</p>
                    <p>Genre:{props.genre.join(",")}</p>
                    <p>Director:{props.director}</p>
                    <p>Actors:{props.actor}</p>
                    <p>Plot:{props.plot}</p>
                </div>
            </div>
        </>
    )

}

export default MovieBox;