import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let { title, description, imgurl, newsurl, author, date, source } = this.props;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="card" style={{ width: "18rem" }}>
                            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "90%" }}>
                                {source}
                            </span>
                            <img className="card-img-top" src={imgurl} alt="Card cap" />
                            <div className="card-body getdeatil">
                                <h5 className="card-title">{title}...</h5>
                                <p className="card-text">{description}...</p>
                                <p class="card-text"><small class="text-muted">By {author} on {date}</small></p>
                                <div className="getdetail"><a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary ">Get Details</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            </>
        )
    }
}

export default Newsitem
