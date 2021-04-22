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
      workers: [
        {
          name: "Peter Anderson",
          job: "Head Chef",
          image: "img/h1-team-1a-700x700.jpg",
          socialLinks: {
            instagram: "https://www.instagram.com",
            twitter: "https://www.twitter.com",
            facebook: "https://www.facebook.com"
          }
        },
        {
          name: "Sharon Hayes",
          job: "Executive Chef",
          image: "img/h1-team-2a.jpg",
          socialLinks: {
            instagram: "https://www.instagram.com",
            twitter: "https://www.twitter.com",
            facebook: "https://www.facebook.com"
          }
        },
        {
          name: "Frank Bailey",
          job: "Kitchen Porter",
          image: "img/h1-team-4a.jpg",
          socialLinks: {
            instagram: "https://www.instagram.com",
            twitter: "https://www.twitter.com",
            facebook: "https://www.facebook.com"
          }
        },
        {
          name: "Carol Simpson",
          job: "Sous Chef",
          image: "img/h1-team-3a.jpg",
          socialLinks: {
            instagram: "https://www.instagram.com",
            twitter: "https://www.twitter.com",
            facebook: "https://www.facebook.com"
          }
        },
      ],
      pizzas: [
        {
          name: "Bismarck",
          image: "img/h3-product-img-1a-100x100.png",
          price: "$30.00",
          discount: {
            applied: true,
            oldPrice: "$55.00"
          },
          first: true,
          last: false
        },
        {
          name: "Fiori di zucca",
          image: "img/h3-product-img-2a-150x150.png",
          price: "$7.00 - $50.00",
          discount: {
            applied: false,
            oldPrice: null
          },
          first: false,
          last: false
        },
        {
          name: "Valdostana",
          image: "img/h3-product-img-6a-100x100.png",
          price: "$55.00",
          discount: {
            applied: false,
            oldPrice: null
          },
          first: false,
          last: false
        },
        {
          name: "Pizza tartufata",
          image: "img/h3-product-img-4a-150x150.png",
          price: "$45.00",
          discount: {
            applied: false,
            oldPrice: null
          },
          first: false,
          last: false
        },
        {
          name: "Francescana",
          image: "img/h3-product-img-5a-150x150.png",
          price: "$25.00",
          discount: {
            applied: false,
            oldPrice: null
          },
          first: false,
          last: false
        },
        {
          name: "Campagnola",
          image: "img/h3-product-img-3a-150x150.png",
          price: "$50.00 - $95.00",
          discount: {
            applied: false,
            oldPrice: null
          },
          first: false,
          last: true
        },
      ]
    },
  }
);
