import React, { Component } from 'react'
import Newsitem from './components/Newsitem'




export class News extends Component {

    articles = []
    constructor() {

        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,

        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c9a32a1e8904ab7839f0597560d7cbc&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
    }
    handleNextclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=5c9a32a1e8904ab7839f0597560d7cbc&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
        })
    }
    handlePrevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c9a32a1e8904ab7839f0597560d7cbc&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
        })
    }
    render() {
        let { newstype } = this.props;
        console.log(this.state);
        return (
            <>
                <br></br>
                <h2 className="text-center headline">Top Headlines of {newstype} </h2>
                <div className="container my-4">
                    <div className="row">
                        {
                        
                        this.state.articles.map((element) => {
                            console.log(this.state.articles);
                            return <div className="col-md-4">
                                <Newsitem key={element.url} title={element.title.slice(0, 45)} description={element.description ? element.description.slice(0, 81) : "hello"} imgurl={!element.urlToImage ? "https://sm.pcmag.com/t/pcmag_in/news/i/iphone-13-/iphone-13-teardown-reveals-third-party-screen-replacements-d_rg9c.1200.jpg" : element.urlToImage} newsurl={element.url}
                                    author={!element.author ? "Unknown" : element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                            </div>
                        })}



                    </div>
                    <div className="d-flex justify-content-between my-4">
                        <button className="btn btn-dark" disabled={this.state.page === 1} onClick={this.handlePrevclick}>&larr; Prev </button>
                        <button className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} onClick={this.handleNextclick}>Next &rarr;</button>

                    </div>
                </div>

            </>
        )
    }
}

export default News
