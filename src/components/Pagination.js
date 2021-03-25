
const Pagination = ({gotoNextPage,gotoPrevPage}) => {
    return (
        <div>
            {gotoPrevPage &&  <button onClick={gotoPrevPage}>Previous Page</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next Page</button>}
        </div>
    )
}

export default Pagination
