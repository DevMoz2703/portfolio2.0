import self from "../img/dedeus.png"
import mock1 from "../img/mock1.PNG"
import mock2 from "../img/mock2.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(4, 0, 255)", "hsl(0, 0%, 7%)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "João de Deus",
    lastName: "Júnior",
    initials: "JJ", // the example uses first and last, but feel free to use three or more if you like.
    position: " Desenvolvedor Web & Mobile",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Activista Social'
        },
        {
            emoji: '🌎',
            text: 'Sediado em Maputo, Moçambique'
        },
        {
            emoji: "💼",
            text: "Fundador de </Meu Vizinho> e </seuCV>"
        },
        {
            emoji: "📧",
            text: "joaodedeuschichavajunior@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/DevMoz2703",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jo%C3%A3o-de-deus-chichava-j%C3%BAnior-0769b9204/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Olá! Eu sou João de Deus. Eu sou Desenvolvedor Web e Mobile. Estudei Informática Aplicada na Universidade Pedagogica de Maputo, fascinado por Tecnologia e Inteligência Artificial, E acredito que Criatividade e Inovação são habilidades diferenciadoras entre os programadores. Voçe deveria contratar-me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'php', 'MySQL', 'Flutter/Cordova'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'leitura',
            emoji: '📖'
        },
        {
            label: 'comédia',
            emoji: '🎭'
        },
        {
            label: 'Youtube',
            emoji: '🎥'
        },
        {
            label: 'comer',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Plataforma de Ajuda Comunitária",
            live: "https://meuvizinho.42web.io/?i=1", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://meuvizinho.42web.io/?i=1", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Plataforma de Criação de CV",
            live: "https://seucv.surge.sh/",
            source: "https://seucv.surge.sh/",
            image: mock2
        }
        
    ]
}