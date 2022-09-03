
const MovieCard = (props) => {
    const {movie,rating,releasedDate} = props;
    return (
        <div className="card-wrapper">
            <div className="">
                <label>Movie :</label> {movie}
            </div>
            <div>
                <label>Rating :</label> {rating}
            </div>
            <div>
                <label>Released Date :</label> {releasedDate}
            </div>
        </div>
    )
}

MovieCard.defaultProps = {

}
export default MovieCard;