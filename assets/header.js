const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>


  
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:#D115F4;
      width:100%;
 


    }

    h1, h2{
      color: #D115F4;
      }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 15px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }

    img {
      width: 100px;
      height: 100px;
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: url('/assets/bg.webp');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }


    

    .logo-container {
      display: flex;
      align-items: center;
    }

    .logo-container h1 {
      margin-left: 10px;  // space between the logo and the title
    }
    
  </style>
  <header>
    <div class="logo-container">
      <img src="/assets/logo.png" alt="Coeur D'amour logo">
      <h1>Coeur D'amour</h1>
    </div>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
  
        <li><a href="mission.html">Mission</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="donation.html">Donation</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
