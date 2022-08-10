const hambuger = document.querySelector('.hamburger');

const navMenu = document.querySelector('.nav-menu');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');

  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hambuger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const speakers = [
  {
    id: 1,
    img: './images/IMG_2128.JPG',
    name: 'Alaa Shaheen',
    bio: 'Alaa Shaheen is a Digital Security Trainer.',
    about:
        'Alaa has more than 5 years of leadership experience of digital security training and 6 years as a math teacher. She learning now programming to become a Full-Stack Developer.',
  },
  {
    id: 2,
    img: './images/Eugene-Kaspersky.webp',
    name: 'Eugene Kaspersky',
    bio: 'Eugene Kaspersky is the CEO of Kaspersky Lab which is the world’s largest privately-held.',
    about:
        'Eugene has earned many international awards for his technological, scientific and entrepreneurial achievements. He was voted the World’s Most Powerful Security Exec by SYS-CON Media in 2011',
  },
  {
    id: 3,
    img: './images/Ginni-Rometty.webp',
    name: 'Ginni Rometty',
    bio: 'Ginni Rometty is the president and CEO of IBM, and the first woman to head the company.',
    about:
        'She holds a degree of Bachelor in Science, with high honours, in computer science and electrical engineering from Northwestern University.',
  },
  {
    id: 4,
    img: './images/Kris_Hagerman_CEO_Sophos_2.jpg',
    name: 'kris Hagerman',
    bio: 'Kris Hagerman is the CEO of Sophos.',
    about:
        'He is responsible for all aspects of Sophos’ strategic direction and business operations. Before Sophos, Kris was the chief executive officer of Corel Corporation.',
  },
  {
    id: 5,
    img: './images/Marillyn-Hewson.png',
    name: 'Marillyn Hewson',
    bio: 'Marillyn Hewson is the Chairman, President, and CEO of Lockheed Martin Corporation.',
    about:
        'In her over 30 years with Lockheed Martin, she has held a variety of increasingly responsible executive positions with the Corporation, including President and Chief Operating Officer',
  },
  {
    id: 6,
    img: './images/Uzair-Gadit.webp',
    name: 'Uzair Gadit',
    bio: 'PureVPN is the brainchild of Uzair Gadit, who specializes in network and information security.',
    about:
        'As of now, he steers the information security wing of all the ventures under Disrupt. He employs his hardcore IT expertise to plug any vulnerabilities in the systems developed by Disrupt.',
  },
];

const displaySpeakers = speakers.map(
  (speaker) => `
      <div id=${speaker.id} >
        <div class="speaker-container">
              <img
                src="${speaker.img}"
                class="speaker-img"
                alt="speaker"
              />
              <div class="speaker-content">
                <h4>${speaker.name}</h4>
                <em>${speaker.bio}</em>
                <p>
                  ${speaker.about}
                </p>
              </div>
          </div>
      </div>
      `,
);

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('warpper').innerHTML = displaySpeakers.join('');
});
