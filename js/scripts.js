var app = new Vue(
  {
    el: "#app",
    data: {
      restaurants: [
        {
          address: "1614 E. Bell Rd #104.",
          city: "Salerno, AZ 85022",
          phone: "(602) 867-1010",
          link: "http://www.ristorante1.com"
        },
        {
          address: "204 E. Pizzetta Tommaso",
          city: "Sorrento, AZ 85022",
          phone: "(358) 867-1010",
          link: "http://www.ristorante2.com"
        },
        {
          address: "Vale Puglia 54",
          city: "Torre Del Greco, AZ 85022",
          phone: "(359) 867-1010",
          link: "http://www.ristorante3.com"
        },
        {
          address: "Corso Itali AA",
          city: "Naples, AZ 85022",
          phone: "(989) 867-1010",
          link: "http://www.ristorante4.com"
        },
      ],
      socialList: [
        {
          class: "fab fa-twitter",
          link: "https://www.twitter.com"
        },
        {
          class: "fab fa-facebook-f",
          link: "https://www.facebook.com"
        },
        {
          class: "fab fa-instagram",
          link: "https://www.instagram.com"
        },
        {
          class: "fab fa-linkedin-in",
          link: "https://www.linkedin.com"
        },
      ],
      navLeft: [
        {
          name: "Home",
          link: "#",
          image: "svg/svg-0.svg"
        },
        {
          name: "Pages",
          link: "#",
          image: ""
        },
        {
          name: "Menu",
          link: "#",
          image: ""
        },
      ],
      navRight: [
        {
          name: "Event",
          link: "#",
          image: ""
        },
        {
          name: "Blog",
          link: "#",
          image: ""
        },
        {
          name: "Landing",
          link: "#",
          image: ""
        },
      ],
    },

  }
);
