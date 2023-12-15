import sarah from './../assets/sw.png'
import sarthak from './../assets/Sk.png';
import wale from './../assets/wale.png';
import forst from './../assets/forest.png'
import Ronal from './../assets/roian.png';
import Joseph from './../assets/joni.png';
import car from './../assets/car.png';

export const data = [
    "All Posts", 
    "Article",
    "Event",
    "Education",
    "Job"
];


export const posts = [
    {
        type: "Article",
        title: "What if famous brands had regular fonts? Meet RegulaBrands!",
        discription: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        view: "1.4k",
        user: "Sarthak Kamra",
        phote: sarthak,
        image: forst,
        icon: '✍️'
    },

    {
        type: "Education",
        title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        discription: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        view: "1.4k",
        user: "Sarthak Kamra",
        phote: sarah,
        image: wale,
        icon: '🔬️'
    },


    {
        type: "Meetup",
        title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        date: "Fri, 12 Oct, 2018",
        location: 'Ahmedabad, India',
        view: "1.4k",
        user: "Ronal Jones",
        phote: Ronal,
        image: car,
        icon: '🗓️'
    },

    {
        type: "Job",
        title: "What if famous brands had regular fonts? Meet RegulaBrands!",
        company: "Innovaccer Analytics Private Ltd.",
        location: 'Noida, India',
        view: "1.4k",
        user: "Joseph Gray",
        phote: Joseph,
        icon: '💼️'
    },

]