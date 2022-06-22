import './Preloader.css';

const Preloader = () => {
  return (
    <div className="loader_wrapper">
      <div className="pillar-loading">
        <span className="pillar"></span>
        <span className="pillar"></span>
        <span className="pillar"></span>
        <span className="pillar"></span>
        <span className="pillar"></span>
      </div>
    </div>
  );
};

export default Preloader;