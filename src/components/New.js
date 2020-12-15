import moment from 'moment'
import 'moment/locale/es'
import React from 'react'

const New = ({item}) => {

    const { author, urlToImage, url, title, content, publishedAt, description} = item
    
    return (
        <>
            <article style={{width: '300px'}} className="position-relative article shadow-sm d-flex flex-column flex-grow-1 m-4 pb-4">
                <img src={urlToImage} alt={title}/>
                <p style={{marginTop: "-20px"}} className="title text w-100 text-center text-white">{author}</p>
                <div className="text-center pl-3 pr-3">
                    <p className="h5" style={{marginTop: !author && '25px'}} ><strong>{title}</strong></p>
                    <p className="m-0 p-0"><small><strong>{ moment(publishedAt).format('LLL')}</strong></small></p>
                    {/* <p><small>{content}</small></p> */}
                    <p><small>{description ? description : content}</small></p>
                </div>
                    <a 
                        style={{bottom: 6,right: 20, color: 'red'}} 
                        href={url}
                        className="position-absolute d-block text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Ver noticia completa</strong>
                    </a>
            </article> 
        </>
    )
}

export default New
