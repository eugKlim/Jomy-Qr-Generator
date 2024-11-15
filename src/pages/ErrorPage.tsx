import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark flex flex-col justify-center items-center">
      <h2 className="font-bold text-[100px] color">
        <span className="text-rose-500">ERROR</span> 404
      </h2>
      <button
        className="bg-white text-center w-60 rounded-2xl h-14 relative text-black text-xl font-semibold group pl-5 mt-8"
        type="button"
        onClick={() => navigate('/home')}
      >
        <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[202px] z-10 duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="25px"
            width="25px"
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#000000"
            ></path>
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#000000"
            ></path>
          </svg>
        </div>
        <p className="translate-x-2">На главную</p>
      </button>
    </div>
  );
};

export default ErrorPage;
