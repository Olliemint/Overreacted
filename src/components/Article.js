import React from 'react'
import "./style.css";

const blogs = [
  {
    id: 1,
    title: "npm audit: Broken by Design",
    date: "July 7, 2021",
    time: "• ☕️☕️☕️ 14 min read",
    description:
      "Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)",
  },
  {
    id: 2,
    title: "Before You memo()",
    date: "February 23, 2021",
    time: "• ☕️ 5 min read",
    description: "Rendering optimizations that come naturally.",
  },
  {
    id: 3,
    title: "What Is JavaScript Made Of?",
    date: "December 20, 2019 ",
    time: "• ☕️☕️☕️ 13 min read",
    description: "Getting a closure on JavaScript",
  },
  {
    id: 4,
    title: "Writing Resilient Components",
    date: "March 16, 2019",
    time: "• ☕️☕️☕️☕️☕️ 24 min read",
    description: "Four principles to set you on the right path.",
  },
  {
    id: 5,
    title: "A Complete Guide to useEffect",
    date: "March 9, 2019",
    time: "• 🍱🍱🍱🍱 49 min read",
    description: "Effects are a part of your data flow.",
  },
  {
    id: 6,
    title: "React as a UI Runtime",
    date: "February 2, 2019",
    time: "• 🍱🍱🍱 37 min read",
    description: "An in-depth description of the React programming model.",
  },
];
    


const Article = () => {
    

  return (
    <section className="center1">
      <div className="bloglist">
        {blogs.map((blog) => {
          return <div>
          <Blog key={blog.id} {...blog}></Blog>
        </div>  
        
        })}
      </div>
    </section>
  );
}

const Blog = (props) => { 
  const {title,date,time,description} = props;
    return (
      <div className="blog">
        <h2 className='blog-title'>{ title }</h2>
        <div className="time">
          <span>{date}</span>
          <span>{time}</span>
        </div>
        <p>
          {description}
        </p>
      </div>
    );
}

export default Article