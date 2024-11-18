import data from '../data/db.json';
import '../styles/Project.css';

export default function MySkills() {
  return (
    <section className="projectsSection" id="myProjects">
      <div className="projects">
        <h2 className="projectsTitle">Projeler</h2>
      </div>
      <div className="projectsCards">
        {data?.projects?.map((item, index) => (
          <div key={index} className="projectsCard">
             <div className="projectImg">
             <img src={item.src} alt="projectImg" />
            </div>
            <div className="projectCardContent">
              <h3 className="projectSectionTitle">{item.title}</h3>
              <p className="projcetDescription">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}