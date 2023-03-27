import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"

const ContainerInfo = ({ quote, handleNewQuote }) => {
    return (
        <section className='containerInfo'>
            <h1 className='containerInfo__title'>Fortune Cookies</h1>


            <article className='containerInfo__phrase'>
                <p>{quote.phrase}</p>
            </article>

            <article className='containerInfo__author'>
                <h4>Created by: {quote.author}</h4>
            </article>
            
            <Button handleNewQuote={handleNewQuote} />
        </section>
    )
}

export default ContainerInfo
