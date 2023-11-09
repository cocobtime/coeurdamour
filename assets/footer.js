const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `


<style>
  body {
    margin: 0;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: black; /* Set the background color of the entire page */
    color: white; /* Set the text color of the entire page */
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .ft-container {
    padding: 10px;
    list-style: none;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    flex-direction: column;
  }

  .ft-container .menu-links {
    display: flex;
    flex-wrap: wrap;
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
    text-align: justify;
  }

  .ft-container img {
    width: 40px;
    height: auto;
    margin-right: 10px;
  }

  .ft-container .footer-text {
    font-size: 14px;
  }
</style>
;

<div class="center">
  <div class="ft-container">
    <img src="/assets/coeur white.png" alt="Coeur D'amour logo">
    <div class="menu-links">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="mission.html">Mission</a>
      <a href="contact.html">Contact</a>
    </div>
    <br>
  
    Téléphone: +44 789 0940 0376<br><br>
    Adresse: 70 High Street, London, UK<br>
    123 Rue de l'Espoir, Kinshasa, RDC<br><br>
    All rights reserved to Coeur D'amour 2013
  </div>
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
