import React from 'react'
import New from './New'

const News = ({news}) => (
        <>
            <div className="d-flex justify-content-center">     
                <section className="d-flex flex-wrap" style={{maxWidth: '1000px'}}>
                    { news && news.map( item => (
                        <New key={item.url} item={item}/>
                    ))
                    }
                </section> 
            </div>
        </>
)

export default News
