const projects = [
    {
        title: "L'Atelier Michaud website redesign",
        filters: "UX/UI design | UX research | Front-end | Graphic design",
        img_src: "./images/squarePhotos/LAtelierMichaud-square.png",
        page_link: "",
        client: "L'Atelier Michaud - jewellery brand",
        type: "4 people group work",
        year: "2021",
    },
    {
        title: "(Innoflow work)",
        filters: "UX/UI design | UX research | Graphic design",
        img_src: "./images/squarePhotos/Innoflow1-square.png",
        page_link: "",
        client: "Innoflow - LOREM IPSUM",
        type: "LOREM IPSUM",
        year: "2021",
    },
    {
        title: "Hogwarts student list dashboard",
        filters: "UX/UI design | Front-end | Graphic design",
        img_src: "./images/squarePhotos/HogwartsStudentList1-square.png",
        page_link: "",
        client: "Uni project - Hogwarts School of Witchcraft and Wizardry",
        type: "Individual project",
        year: "2021",
    },
    {
        title: "Third Row mobile app design",
        filters: "UX/UI design | UX research",
        img_src: "./images/squarePhotos/ThirdRow-square.png",
        page_link: "",
        client: "Third Row - made up web shop company",
        type: "4 people group work",
        year: "2020",
    },
    {
        title: "Silfen bags web shop??",
        filters: "UX/UI design | UX research | Front-end | Graphic design",
        img_src: "./images/squarePhotos/Magazine-square.png",
        page_link: "",
        client: "Silfen - accessories web shop",
        type: "4 people group work",
        year: "2021",
    },
    {
        title: "Me-Mover web campaign??",
        filters: "UX/UI design | UX research | Graphic design",
        img_src: "./images/squarePhotos/Magazine-square.png",
        page_link: "",
        client: "Me-Mover - crosstepper machine producer",
        type: "4 people group work",
        year: "2021",
    },
    {
        title: "Printed calendar focused on music festivals",
        filters: "Graphic design | Print",
        img_src: "./images/squarePhotos/MusicFestivalCalendar-square.png",
        page_link: "",
        client: "Mjuzikal - made up company seeling music calendars",
        type: "Individual project",
        year: "2019",
    },
    {
        title: `Digital Perspectives magazine`,
        filters: "Graphic design | Print",
        img_src: "./images/squarePhotos/Magazine-square.png",
        page_link: "",
        client: "Deloitte",
        type: "Individual project",
        year: "2020",
    },
];

let container = document.querySelector(".container");
// let container = document.querySelector(".container")[0];
console.log("CONT", container);

projects.forEach(function (proj) {
    create_project(container, proj);
});

function create_project(box, work) {
    let div = document.createElement("div");
    div.innerHTML = `
        <a href="${work.page_link}">
        <img src="${work.img_src}" class="img_portfolio">
        </a>
        <h3>${work.title}</h3>
        <h4>${work.filters}</h4>
    `;
    div.className = "item";
    box.appendChild(div);
}
