import React from 'react'

const Nav = () => {
    return (
        <>
            <div className="d-flex justify-content-between m-3">
                <a href="/" 
                    className=" h3 text-dark" 
                    style={{textDecoration: 'none'}}>
                    <strong>NEWS</strong>
                    <i className="far fa-newspaper"></i>
                </a>
                <a style={{ textDecoration: 'none'}}
                    className="title h5 text-dark pt-1" href="/">
                    <strong>Sign in </strong>
                    <i className="fas fa-sign-in-alt"></i>
                </a>
            </div>
        </>
    )
}

export default Nav
