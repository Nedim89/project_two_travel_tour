import Tour from "./Tour";

const Tours = ({tours}) => {

return (
    <section>
        <div>
            <h2>tour list</h2>
            <div className="underline"></div>
        </div>
        <div className="img-wrapper">
            {tours.map(tour=>{
                return <Tour key={tour.id} {...tour}/>;
            })}
        </div>
    </section>


)

}

export default Tours;