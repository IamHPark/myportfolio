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
        detail: "A gamification real-time chat app",
        tech: ["Javascript", "React.js", "Node.js", "Socket.I.O"],
        img: "/lighthousetown.jpg",
        content: "\"Make coders easy to connect\" my teammates and I wanted to build an app that connects developers where they can discuss and learn together. Lighthouse town is a gamification chat app that enables people to talk as their avatars and share a lecture in real-time to study together. Based on Node.js and React.js, we implemented features such as login, register, chatting and moving avatars. Socket.I.O was used for real-time chatting and syncronizing all avatars moves on the screen.",
        gif: "/lighthousetown.jpg"
    },
    {
        id: 1,
        title: "Pick the Dishes",
        detail: "This is a gamification chat-app that enable real-time chatting and sharing a video",
        tech: ["all", "Javascript", "React"],
        img: "/pickthedish.jpg"
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