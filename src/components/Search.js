import React from 'react'

const Search = ({ handlerInput, search }) => {

    return (
        <section className="searchbox-wrap">
            <input
                type='text'
                placeholder='Search for a movie'
                className="searchbox"
                onChange={handlerInput}
                onKeyPress={search}
            />
        </section>
    )
}

export default Search;