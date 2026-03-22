const Filter = ({ handleFilterChange, filter }) => {
    return (
        <div>
            filter shown with: <input onChange={handleFilterChange} type="text" value={filter} />
        </div>
    )
}

export default Filter