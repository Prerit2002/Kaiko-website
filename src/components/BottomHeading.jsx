import { useNavigate } from "react-router-dom";
export default function BottomHeading({ title, subtitle , subtitle2, redirectUrl}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(redirectUrl);
    setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 50);
    
  }
  return (
    <div className="flex justify-between items-center  bg-black my-3  p-8 rounded-xl md:rounded-2xl shadow-lg cursor-pointer" onClick={handleClick}>
        <div>
            <h2 className="text-xl md:text-4xl font-bold text-white">{title}</h2>
            {subtitle2 && <p className="text-[10px] md:text-lg text-gray-400">{subtitle2}</p>}
        </div>
      
      <img src={subtitle} alt="Placeholder" className="rounded-lg shadow-lg w-16 md:w-17" />
    </div>
  );
}
