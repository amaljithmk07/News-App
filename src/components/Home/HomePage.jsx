import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
function HomePage() {
  const [news, setNews] = useState({
    articles: [],
  });
  const [news1, setNews1] = useState({
    articles: [],
  });
  useEffect(() => {
    const Url =
      "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=890a15c2ee7349baae46f601fd5b0172";
    axios
      .get(Url)
      .then((data) => {
        console.log(data.data);
        setNews(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=890a15c2ee7349baae46f601fd5b0172";
    axios
      .get(url)
      .then((data) => {
        console.log(data.data);
        setNews1(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="nav-1">
          <div className="sub-1">
            <div className="logo ">
              <img
                src="news.png"
                alt="asdsd"
                style={{
                  height: "40px",
                  // padding: "10px 50px",
                }}
              />
              <img
                src="profile.png"
                alt=""
                className="img"
                style={{ height: "25px" }}
              />
              Sign in
            </div>
          </div>
        </div>
        <div className="nav-2">
          <div className="sub-2">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="#">News </a>
              </li>
              <li>
                <a href="#">Sport</a>
              </li>
              <li>
                <a href="#">Earth</a>
              </li>
              <li>
                <a href="#">Reel</a>
              </li>
              <li>
                <a href="#">Worklife</a>
              </li>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Culture</a>
              </li>
            </ul>
              <input
                type="text"
                className="searchBar"
                placeholder="Search BBC ..."
              />


          </div>
        </div>
      </div>
      <div class="ticker-wrap">
        <div class="ticker">
          {news.articles.map((news) => (
            <div class="ticker__item">{news.title}</div>
          ))}
        </div>
      </div>

      <div className="body">
        <div className="content">
          {news1.articles.map((item1) => (
            <div className="cards">
              <img src={item1.urlToImage} alt="</>" />
              {item1.title}
            </div>
          ))}
          {news.articles.map((item) => (
            <div className="cards">
              <img src={item.urlToImage} alt="</>" />
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
