import React,{Component} from 'react';

import './Home.css';
import Card from './Card/Card';
class Home extends Component{
    toggleFilter=(e)=>{
        document.getElementById("nav-filter-content").classList.toggle("nav-filter-content-disable");
        document.getElementById("trending-movies").classList.toggle("trending-movies-translate");
        e.target.classList.toggle("drop-rotate");
    }
    render(){
        return(
            <div className="home-container">
                <nav className="home-nav">
                    <div className="product-name-outer">
                        <div className="product-name-inner">
                            <span>Movies@</span>
                        </div>
                    </div> 
                    <div className="nav-content">
                        <div className="nav-search">
                            <div className="search-icon">
                                <div className="line">
                                </div>
                            <div className="backdrop"></div>
                            </div>
                            <input type="text" placeholder="search"/>
                        </div>
                        <div className="nav-filter-heading">
                            <p>Filters</p>
                            <div className="drop-icon-right" onClick={this.toggleFilter}>&#9658;</div>
                        </div>
                        <div id="nav-filter-content" className="nav-filter-content-disable">
                            <div className="movie-year select">
                                <select name="movie-year" id="year">
                                    <option value="">movie year..</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="1900">other..</option>
                                </select>
                            </div>
                            <div className="movie-language select">
                                <select name="movie-lang" id="lang">
                                    <option value="">lanuage..</option>
                                    <option value="english">English</option>
                                    <option value="french">French</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="japanese">Japanese</option>
                                    <option value="other">other..</option>
                                </select>
                            </div>
                            <div className="movie-country select">
                                <select name="movie-country" id="country">
                                    <option value="">country..</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                    <option value="uk">UK</option>
                                    <option value="new zealand">New Zealand</option>
                                    <option value="australia">Australia</option>
                                    <option value="japan">Japan</option>
                                    <option value="china">China</option>
                                    <option value="germany">Germany</option>
                                    <option value="other">other..</option>
                                </select>
                            </div>
                            <div className="search-btn">
                                <button className="btn">Search</button>
                            </div>
                        </div>
                        <div id="trending-movies" className="trending-movies-translate">
                            <span>Trending Movies</span>
                        </div>
                    </div>
                </nav>
                <div className="movies-container">
                    <div className="discover">Discover</div>
                    <div className="movies">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;