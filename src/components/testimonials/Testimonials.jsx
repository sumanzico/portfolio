import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ayush Shrivastava",
      title: "Senior Developer at Zimyo",
      img:
        "assets/ayush.png",
      icon: "assets/twitter.png",
      desc:
        "Bhaswar is self driven,conceptualise ideas on his own and applies it ,he is quick learner and have the ability to organise the data of any given size and complexity in a very simple way,it was a great experience working with him!",
    },
    {
      id: 2,
      name: "Anupriya Goswami",
      title: "Content Writer at DELKA",
      img:
        "assets/Anu.png",
      icon: "assets/youtube.png",
      desc:
        "Bhaswar shows a level of dedication, problem solving ability and an acute sense of detail and human orientation, that is rare and very unique in web developement Industry. ",
      featured: true,
    },
    {
      id: 3,
      name: "Abhishek Tiwari",
      title: "Full stack Developer at Amazon ",
      img:
        "assets/Abhi.png",
      icon: "assets/linkedin.png",
      desc:
        "I have known Bhaswar from about 1.5 years. Worked with him for 4 months. He's very keen to work and learn new things. Never had to spare much time guiding him. Always showed positive attitude towards work.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
