import {useState} from 'react'

const Tour = ({id,image, info, name, price, removeTour}) =>{

  const [showMore, setShowMore] = useState(false);

    return(
        <article className="single-tour">
          <div className="wrapper-a">
          <header>
        <img src={image} alt={name} />
        </header>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {showMore? info : `${info.substring(0,200)}...`}
            <label className="btn" onClick={()=> setShowMore(!showMore)}>{showMore? ` show less` : ` show more`}</label>
            </p>
            <button onClick={()=>removeTour(id)} className="btn-remove-tour" data-tooltip="Remove this result!">I'm not interested</button>
          </div>
          </article>
    );
}

export default Tour;