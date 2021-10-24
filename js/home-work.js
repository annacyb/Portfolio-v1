"use strict";

// ---------- GLOBAL VARIABLES ----------//

let SELECTEDFILTERS = [];
const PROJECTS = [
    {
        title: "L'Atelier Michaud website redesign",
        filters:
            "UX/UI design | UX research | Branding | Front-end | Graphic design",
        img_src: "./images/squarePhotos/LAtelierMichaud-square.png",
        page_link: "./draft-project.html",
        client: "L'Atelier Michaud - jewellery brand",
        type: "4 people group work",
        year: "2021",
    },
    {
        title: "Innoflow work",
        filters: "UX/UI design | UX research | Graphic design",
        img_src: "./images/squarePhotos/Innoflow1-square.png",
        page_link: "./draft-project.html",
        client: "Innoflow - LOREM IPSUM",
        type: "LOREM IPSUM",
        year: "2021",
    },
    {
        title: "Hogwarts student list dashboard",
        filters: "UX/UI design | Front-end | Graphic design",
        img_src: "./images/squarePhotos/HogwartsStudentList1-square.png",
        page_link: "./draft-project.html",
        client: "Uni project - Hogwarts School of Witchcraft and Wizardry",
        type: "Individual project",
        year: "2021",
    },
    {
        title: "Third Row mobile app design",
        filters: "UX/UI design | UX research",
        img_src: "./images/squarePhotos/ThirdRow-square.png",
        page_link: "./draft-project.html",
        client: "Third Row - made up web shop company",
        type: "4 people group work",
        year: "2020",
    },
    // {
    //     title: "Silfen bags web shop??",
    //     filters:
    //         "UX/UI design | UX research | Front-end | Branding | Graphic design",
    //     img_src: "./images/squarePhotos/Magazine-square.png",
    //     page_link: "",
    //     client: "Silfen - accessories web shop",
    //     type: "4 people group work",
    //     year: "2021",
    // },
    // {
    //     title: "Me-Mover web campaign??",
    //     filters: "UX/UI design | UX research | Graphic design",
    //     img_src: "./images/squarePhotos/Magazine-square.png",
    //     page_link: "",
    //     client: "Me-Mover - crosstepper machine producer",
    //     type: "4 people group work",
    //     year: "2021",
    // },
    {
        title: "Printed calendar focused on music festivals",
        filters: "Branding | Graphic design | Print",
        img_src: "./images/squarePhotos/MusicFestivalCalendar-square.png",
        page_link: "./draft-project.html",
        client: "Mjuzikal - made up company seeling music calendars",
        type: "Individual project",
        year: "2019",
    },
    {
        title: `Digital Perspectives magazine`,
        filters: "Graphic design | Print",
        img_src: "./images/squarePhotos/Magazine-square.png",
        page_link: "./draft-project.html",
        client: "Deloitte",
        type: "Individual project",
        year: "2020",
    },
];

//--------------------//

document.addEventListener("DOMContentLoaded", init);

function init() {
    let container = document.querySelector(".container");
    // let container = document.querySelector(".container")[0];

    showFilteredProjects();
    filterProjects();
}

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

function filterProjects() {
    document
        .querySelectorAll(".filterButton")
        .forEach((option) => option.addEventListener("click", changeFiltering));
}

function changeFiltering(event) {
    const target = event.currentTarget;
    const targetContent = target.textContent;

    if (SELECTEDFILTERS.includes(targetContent)) {
        const index = SELECTEDFILTERS.indexOf(targetContent);
        SELECTEDFILTERS.splice(index, 1);
        target.classList.remove("filterButton-active");
        target.classList.add("filterButton");
        showFilteredProjects();
    } else {
        SELECTEDFILTERS.push(targetContent);
        target.classList.remove("filterButton");
        target.classList.add("filterButton-active");
        showFilteredProjects();
    }
    console.log("LISTA ", SELECTEDFILTERS);
}

function showFilteredProjects() {
    document.querySelector(".container").innerHTML = "";
    let container = document.querySelector(".container");

    if (SELECTEDFILTERS.length == 0) {
        PROJECTS.forEach(function (proj) {
            create_project(container, proj);
        });
    } else {
        PROJECTS.forEach(function (proj) {
            SELECTEDFILTERS.forEach(function (filter) {
                if (proj.filters.includes(filter)) {
                    create_project(container, proj);
                }
            });
        });
    }
}
