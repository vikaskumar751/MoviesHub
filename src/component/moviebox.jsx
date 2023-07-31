const MovieBox = (props) => {
    //To take the user to wiki page of movies
    const filmlink = "https://en.wikipedia.org/wiki/" + props.title.split(" ").join("_") + "_";

    return (
        <>
            <div className="overflow-hidden relative float-left rounded-lg shadow-md mt-8 mb-7 ml-2 mr-2 w-48 h-150 text-white hover:shadow-sky-700">
                <img src={props.poster} className="object-cover rounded-t-lg" alt="Movie Poster" />
                <div className="p-1">
                    <h5 className="text-lg font-semibold   mb-1">
                        <a href={filmlink} target="_blank" rel="noreferrer">
                            {props.title}
                        </a>
                    </h5>
                    <p className="mb-0.25">Year: {props.year}</p>
                    <p className="mb-0.25">Rating: {props.rating}</p>

                    <p className="mb-0.25">Genre: {props.genre.join(", ")}</p>

                    {/* <p className="mb-0.25">Actors: {props.actor}</p><br /> */}
                </div>
            </div>
        </>


    )

}

export default MovieBox;