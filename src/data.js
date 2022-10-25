const skillData = [
    "all",
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "PostgreSQL"
]

const projectsData = [
    {
        id: 0,
        title: "lighthouse-town",
        img: "/img/project1/lighthousetown.jpg",
        detail: "A gamification chat app enable users to chat, manipulate own avatar's movements in real-time",
        content: "\"Make coders easy to connect\". My teammates and I wanted to build an app that connects developers where they can discuss and learn together. Lighthouse town is a gamification chat app that enables people to talk and move their avatars in real time. Based on Node.js and React.js, we implemented features such as login, register, chatting and moving avatars. Socket. I.O was used for real-time chatting and synchronizing all avatars' moves on the screen.",
        tech: ["Javascript", "ReactJS", "NodeJS", "Express", "Socket.I.O", "Canvas", "Sass", "PostgreSQL"],
        live: "https://main--lighthouse-town.netlify.app/",
        github: "https://github.com/IamHPark/lighthouse-town",
        test: "Live demo can be tested with ID: test1@test.com / PW: heesoo, ID: test@test.com / PW: moon or by registering one for yourself",
        features: [
            "Created database with PostgreSQL and able to login with ID and password stored in the database",
            "Able to Register with unique email and username and ID will be stored in the database",
            "With Socket.I.O, users can talk to the public in real-time",
            "Private chat with a specific user is available",
            "By separating Socket.I.O chat room, the chat room will be separated depending on what room a user is located",
            "With arrow key event listener, HTML Canvas draws avatar's movements",
            "Socket.I.O enable to synchronize other avatars' movements in real-time",
            "Able to add or delete a friend to or from friend lists which are stored in the database",
            "Able to see online users in a certain chat room"
        ],
        imgs: [
            "/img/project1/LH-1.jpg",
            "/img/project1/LH-2.jpg",
            "/img/project1/LH-3.jpg",
            "/img/project1/LH-4.jpg",
        ],
        gif: "/img/project1/lighthousetown.gif"
    },
    {
        id: 1,
        title: "Pick the Dishes",
        img: "/img/project2/pickthedish.jpg",
        detail: "A food ordering and order management app for a restaurant with SMS notification service",
        content: `Pick the dishes is a web app that enables customers to order food online and restaurant owners and staff to manage online orders. The server was created with NodeJS and the client side was implemented with EJS. My teammates and I wrote user stories and designed database schema with PostgreSQL. With Twilio third party API, a SMS notification function was added to let customers know when the food is ready to pick up and let restaurant owners and staff know when the new online order has made.\n My teammates and I developed an app horizontally, and I was in charge of customer ordering page. Therefore I was able to handle all process from creating database schema, building the server to rendering client side.`,
        tech: ["NodeJS", "Express", "EJS", "PostgreSQL", "Twilio API", "Axios", "ajax"],
        live: "https://pickthedishes.herokuapp.com",
        github: "https://github.com/IamHPark/pickthedishes",
        test: "Live demo can be tested with ID: 1 for restaurant owners and staff and ID: 2 for customers",
        features: [
            "Wrote user stories, drew ERD and design database schema",
            "Rendering food lists from the database by using EJS",
            "Able to add or delete the quantity of food to or from the cart and complete order",
            "A customer will be notified via SMS of the estimated time it will take and when the food is ready to pick up",
            "Restaurant owner will be notified via SMS when the new online order has been made",
            "Restaurant owner can manage food status with pending, preparing, and ready-for-pickup by drag and drop the order",
            "Restaurant owner can put the estimated preparation time which will be notified to customers",
            "By pressing the Complete Order button, the order will be removed from the process"
        ],
        imgs: [
            "/img/project2/pick-1.jpg",
            "/img/project2/pick-2.jpg",
            "/img/project2/pick-3.jpg",
            "/img/project2/pick-4.jpg",
        ],
        gif: "/img/project2/pick.gif"
    },
    {
        id: 2,
        title: "Shoes Market",
        img: "/img/project3/shopping-mall.jpg",
        detail: "A shoes e-commerce website with a responsive design",
        content: "A front-end e-commerce website for shoe shopping with a responsive design. The site is built with React.js and has different routes for pages by using the React-router-dom library. I utilized React-redux to store and manipulate states for the item quantity in the cart. I understood Web Storage API and leveraged localStorage to show recently viewed items. ",
        tech: ["ReactJS", "React-redux", "React-router"],
        live: "https://iamhpark.github.io/shopping-mall",
        github: "https://github.com/IamHPark/shopping-mall",
        features: [
            "Item detail pages will show up when clicking each item",
            "Able to add items into the cart and change the number of items",
            "Recently viewed items will appear on the cart page",
        ],
        imgs: [
            "/img/project3/shoes-1.jpg",
            "/img/project3/shoes-2.jpg",
            "/img/project3/shoes-3.jpg",
            "/img/project3/shoes-4.jpg",
        ],
        gif: "/img/project3/shoes.gif"
    },
    {
        id: 3,
        title: "Tiny App",
        img: "/img/project4/tinyapp.jpg",
        detail: "An URL shortener app for easy URLs sharing and managing the total number of visits",
        content: "To make favourite websites easy to share and manage, a Tinyapp shortens URLs and tracks the number of visits with tiny URLs. Node.js is used for the back-end and CRUD methods are designed with RESTful API. Implemented Login and Register process by using bcrypt. ",
        tech: ["Node.js", "Express", "EJS", "bcrypt", "method-override"],
        // live: "https://iamhpark.github.io/shopping-mall",
        github: "https://github.com/IamHPark/tinyapp",
        features: [
            "Users can register with a unique email and log in with the correct email and password",
            "Users cannot create or edit tiny URLs without login ",
            "In Create New URL page, a tiny URL can be created by submitting a long URL",
            "All tiny URLs are listed in My URLs page",
            "The number of visits with tiny URLs will be tracked",
            "Tiny URLs can be edited and deleted on My URLs page",
            "Users can edit tiny URLs that only belong to themselves"
        ],
        imgs: [
            "/img/project4/tiny-1.jpg",
            "/img/project4/tiny-2.jpg",
            "/img/project4/tiny-3.jpg",
            "/img/project4/tiny-4.jpg",
        ],
        gif: "/img/project4/tinyapp.gif"
    },
]


const icons = [
    {
        name: 'Javascript',
        img: 'js.svg'
    },
    {
        name: 'ReactJS',
        img: 'react.svg'
    },
    {
        name: 'NodeJS',
        img: 'nodejs.svg'
    },
    {
        name: 'PostgreSQL',
        img: 'postgresql.png'
    },
    {
        name: 'MongoDB',
        img: 'mongodb.svg'
    },
    {
        name: 'Socket.I.O',
        img: 'socket-io.svg'
    },

    {
        name: 'HTML',
        img: 'html.svg'
    },
    {
        name: 'CSS',
        img: 'css.svg'
    },
    {
        name: 'Git',
        img: 'git.svg'
    },
    {
        name: 'Figma',
        img: 'figma.png'
    },



]


// 'js.svg', 'react.svg', 'mongodb.svg', 'nodejs.svg', 'socket-io.svg']


export {skillData, projectsData, icons};