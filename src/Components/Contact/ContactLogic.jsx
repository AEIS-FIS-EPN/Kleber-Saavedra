import { Link } from 'react-router-dom';
import styles from '../../styles/Contact.module.css';

import Footer from '../Footer/FooterLogic';

import goto from '../../assets/goto_arrow.png';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import WpButton from '../WpButton/WpButtonLogic';


const contacts = [
  { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/alexander-saavedra-garcia/', img: linkedin },
  { name: 'GITHUB', url: 'https://github.com/alexansaa', img: github },
  { name: 'INSTAGRAM', url: 'https://www.instagram.com/alexbysaa/', img: instagram },
];

const ContactLogic = () => {
  return (
    <div className={styles.contact_cnt}>
      <div className={`${styles.continuous_animation}`}>
        <div className={`${styles.move_left_infinite1} ${styles.moving_element1}`}>LET'S TALK - </div>
        <div className={`${styles.move_left_infinite2} ${styles.moving_element2}`}>LET'S TALK - </div>
      </div>
      <div className={styles.contact_links}>
        <ul>
          {contacts.map((cont, index) => {
            return (
              <Link key={index} to={cont.url} className={styles.contactBorder}>
                <li>
                  <div>
                    <img src={cont.img} alt={`go to ${cont.name} url`} />
                    {cont.name}
                    <img id='goto_img' src={goto} alt={`go to ${cont.name} url`} className={styles.mirror_img} />
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={styles.button_ctn}>
        <WpButton />
      </div>
      <Footer />
    </div>
  );
};

export default ContactLogic;