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
        img: "/lighthousetown.jpg",
        detail: "A gamification chat app enable users to chat, manipulate own character's movements and share a video in real-time",
        content: "\"Make coders easy to connect\" my teammates and I wanted to build an app that connects developers where they can discuss and learn together. Lighthouse town is a gamification chat app that enables people to talk as their avatars and share a lecture in real-time to study together. Based on Node.js and React.js, we implemented features such as login, register, chatting and moving avatars. Socket.I.O was used for real-time chatting and syncronizing all avatars moves on the screen.",
        tech: ["Javascript", "React.js", "Node.js", "Express", "Socket.I.O", "Canvas", "Sass", "PostgreSQL"],
        live: "https://lighthouse-town.herokuapp.com/",
        github: "https://github.com/IamHPark/lighthouse-town",
        test: "TEST ID: test1@test.com & PW: heesoo / ID: test@test.com & PW: moon",
        features: [
            "Login with ID and Password stored in database",
            "Register with unique email and username",
            "Talk to the public in real-time",
            "Private chat with a specific user",
            "Move own avatar with arrow keys",
            "See other avatars moves in real-time",
            "Add or delete a friend to or from friend lists",
            "Check online users in a certain chat room"
        ],
        imgs: [
            "/img/project1/LH-1.jpg",
            "/img/project1/LH-2.jpg",
            "/img/project1/LH-3.jpg",
            "/img/project1/LH-4.jpg",
        ]
    },
    {
        id: 1,
        title: "Pick the Dishes",
        img: "/pickthedish.jpg",
        detail: "Food ordering and order management app for a restaurant with SMS notification service",
        content: "",
        tech: ["Node.js", "Express", "EJS", "PostgreSQL", "Twilio API", "Axios", "ajax"],
        live: "https://pickthedishes.herokuapp.com",
        github: "https://github.com/IamHPark/pickthedishes",
        test: "TEST ID: 1 for customer / 2 for restaurant owner"
    },
    {
        id: 2,
        title: "Tinyapp",
        detail: "This is a gamification chat-app that enable real-time chatting and sharing a video",
        tech: ["all", "Javascript", "React"],
        img: "/tinyapp.png"
    },
    {
        id: 3,
        title: "lighthouse-town",
        detail: "This is a gamification chat-app that enable real-time chatting and sharing a video",
        tech: ["all", "Javascript", "React"],
        img: "/lighthousetown.jpg"
    }
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