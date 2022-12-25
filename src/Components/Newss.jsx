import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import News from "./News";
function Newss() {
  const apiKey = "b61901c1524c430dab44cfe04f14dd56";
  const [news, setNews] = useState([]);
  const [value, setValue] = useState("Hindi");
  const inputValue = useRef("");
  const Cricket = useRef("");
  const India = useRef("");
  const Fifa = useRef("");
  const Bihar = useRef("");

  useEffect(() => {
    fatchData();
  }, [value]);

  async function fatchData() {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${value}&from=2022-11-23&sortBy=publishedAt&apiKey=${apiKey}`
    );
    const jsonData = await data.json();
    setNews(jsonData.articles);
  }
  const search = (event) => {
    event.preventDefault();
    const InputValue = inputValue.current.value;
    setValue(InputValue);
  };

  const cricket = () => {
    setValue(Cricket.current.value);
  };
  const india = () => {
    setValue(India.current.value);
  };
  const fifa = () => {
    setValue(Fifa.current.value);
  };
  const bihar = () => {
    setValue(Bihar.current.value);
  };

  return (
    <>
      <h1> News App </h1>
      <form action="">
        <input type="text" placeholder="Search News" ref={inputValue} />
        <button onClick={search}>Search</button>
      </form>
      <div className="btn">
        <button className="btn1" value="india" ref={India} onClick={india}>
          India
        </button>
        <button
          className="btn1"
          value="cricket"
          ref={Cricket}
          onClick={cricket}
        >
          Cricket
        </button>
        <button className="btn1" value="Fifa" ref={Fifa} onClick={fifa}>
          FIFA
        </button>
        <button className="btn1" value="Bihar" ref={Bihar} onClick={bihar}>
          Bihar
        </button>
      </div>
      <div className="box">
        {news.map((newsx) => (
          <News
            key={newsx.url}
            discri={newsx.description}
            img={newsx.urlToImage}
            date={newsx.publishedAt}
            url={newsx.url}
          />
        ))}
      </div>
    </>
  );
}

export default Newss;
