const baseURL = "https://beatrizmartins3.github.io/wdd230/";
const linksURL = "https://beatrizmartins3.github.io/wdd230/data/links.json";
const cards = document.querySelector("#cards");

async function getLinks(linksURL) {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error(error);
  }
}

getLinks(linksURL);

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
    let sec = document.createElement("section");
    let ul = document.createElement("ul");

    // Create a heading for the week
    let p = document.createElement("p");
    p.textContent = `Week ${week.week}`;
    sec.appendChild(p);

    week.links.forEach((link) => {
      let li = document.createElement("li");
      let a = document.createElement("a");

      a.textContent = link.title;
      a.href = link.url;

      li.appendChild(a);
      ul.appendChild(li);
    });

    sec.appendChild(ul);
    cards.appendChild(sec);
  });
};
