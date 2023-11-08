const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
.ft-container {
  height: auto;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background-color: black;
  color: white;
}

.ft-container .menu-links {
  display: flex;
  flex-wrap: wrap; /* Allow menu links to wrap to the next line if needed */
}

.ft-container a {
  text-decoration: none;
  color: white;
  font-size: 15px;
  margin: 0 10px;
}

.ft-container p {
  margin-top: 20px;
  margin-bottom: 0;
  text-align: justify; /* Justify the text for better alignment */
}

/* Additional styles for the links (hover, etc.) can be added here */

.ft-container img {
  width: 40px; /* Adjust the width to your desired size */
  height: auto; /* This maintains the image's aspect ratio */
  margin-right: 10px; /* Add spacing between the logo and links */
}

.ft-container .footer-text {
  font-size: 14px; /* Adjust the font size for the text */
}
</style>


<div class="ft-container">
  <img src="/assets/coeur white.png" alt="Coeur D'amour logo">
  <div class="menu-links">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="mission.html">Mission</a>
    <a href="contact.html">Contact</a>
  </div>
  <br>
  <p class="footer-text">
    Téléphone: +44 789 0940 0376<br><br>
    Adresse: 70 High Street, London, UK<br>
    123 Rue de l'Espoir, Kinshasa, RDC<br><br>
    All rights reserved to Coeur D'amour 2013

    
  </p>
</div>
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', FooterComponent);
