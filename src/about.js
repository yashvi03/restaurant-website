const loadMenu = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const headline = document.createElement("p");
  headline.textContent = "About";
  headline.style.textAlign = "center";
  headline.style.marginBottom = "20px";
  headline.style.fontSize = "48px";
  headline.style.fontWeight = "bold";
  content.appendChild(headline);

  const desc = document.createElement("p");
  const desc1 = document.createElement("p");
  const desc2 = document.createElement("p");

  desc.textContent =
    "The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
  desc1.textContent = "The Chef? Mr. Italiano himself";
  desc2.textContent = "We are proud of our interiors.";

  desc.classList.add("common-desc");
  desc1.classList.add("common-desc");
  desc2.classList.add("common-desc");

  content.appendChild(desc);
  content.appendChild(desc1);
  content.appendChild(desc2);

};

export default loadMenu;
