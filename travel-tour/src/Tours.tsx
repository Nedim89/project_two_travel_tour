import Tour from "./Tour";

const Tours = ({tours, removeTour}) => {

return (
    <section>
        <div>
            <h2>Travel Tour List</h2>
            <div className="underline"></div>
        </div>
        <div className="img-wrapper">
            {tours.map(tour=>{
                return <Tour key={tour.id} {...tour} removeTour={removeTour}/>;
            })}
        </div>
    </section>


)

}

export default Tours;