const projects = [
    {
        title: "L'Atelier Michaud website redesign",
        filters: "UX/UI design | UX research | Front-end | Graphic design",
        img_src: "./images/squarePhotos/LAtelierMichaud-square.png",
        page_link: "",
    },
    {
        title: "(Innoflow work)",
        filters: "UX/UI design | UX research | Graphic design",
        img_src: "./images/squarePhotos/Innoflow1-square.png",
        page_link: "",
    },
    {
        title: "Hogwarts student list dashboard",
        filters: "UX/UI design | Front-end | Graphic design",
        img_src: "./images/squarePhotos/HogwartsStudentList1-square.png",
        page_link: "",
    },
    {
        title: "Third row t-shirt mobile app design",
        filters: "UX/UI design | UX research",
        img_src: "./images/squarePhotos/ThirdRow-square.png",
        page_link: "",
    },
    {
        title: "Silfen bags web shop??",
        filters: "UX/UI design | UX research | Front-end | Graphic design",
        img_src: "./images/squarePhotos/Magazine-square.png",
        page_link: "",
    },
    {
        title: "Me-Mover web campaign??",
        filters: "UX/UI design | UX research | Graphic design",
        img_src: "./images/squarePhotos/Magazine-square.png",
        page_link: "",
    },
    {
        title: "Printed calendar focused on music festivals",
        filters: "Graphic design | Print",
        img_src: "./images/squarePhotos/MusicFestivalCalendar-square.png",
        page_link: "",
    },
    {
        title: `Digital Perspectives magazine`,
        filters: "Graphic design | Print",
        img_src: "./images/squarePhotos/Magazine-square.png",
        page_link: "",
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
