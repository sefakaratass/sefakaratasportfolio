import data from '../data/db.json';
import '../styles/Skills.css'

export default function MySkills() {
  return (
    <section className="skillsSection" id="skills">
      <div className="skillsPortfolio">
        <p className="skillsTitle">Yeteneklerim</p>
        <h2 className="skillsHeading">Uzmanlıklarım</h2>
      </div>
      <div className="skillsCards">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skillCard">
            <div className="skillsImg">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skillsCardContent">
              <h3 className="skillsSectionTitle">{item.title}</h3>
              <p className="skillsSectionDescription">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}