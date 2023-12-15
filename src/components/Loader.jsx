import './Loader.css';

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">

      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  );
};

export default Loader;