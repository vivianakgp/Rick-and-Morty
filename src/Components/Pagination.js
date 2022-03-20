import React from 'react';
const Pagination = ({residentPerPage, totalResisdents, paginate}) => {

    const pageNumber = [];//1-2-3-4-5-6-7-8-9-10-11-12.....-26
    // La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
    // Math.ceil( totalResisdents / residentPerPage) 10/260 o el largo del arrat residents =26
    for(let i=1; i <= Math.ceil( totalResisdents / residentPerPage);i++){
        pageNumber.push(i)
    }
    console.log(pageNumber)
    return(
    <nav className="navPagination">
        <ul className="navPagi__content">
            {
                pageNumber.map(num => (
                    <li key={num} onClick={(e) => paginate(num)}>
                        {num}
                    </li>
                ))
            }
        </ul>
    </nav>
    )
}
export default Pagination;