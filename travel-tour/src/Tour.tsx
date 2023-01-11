import {useState} from 'react'

const Tour = ({id,image, info, name, price}) =>{

  const [showMore, setShowMore] = useState(true);

    return(
        <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {showMore? info : `${info.substring(0,200)}...`}
            </p>
        </footer>
        <button className="btn" onClick={()=> setShowMore(!showMore)}>{showMore? ` show less` : ` show more`}</button>
          
      </article>
    );
}

export default Tour;