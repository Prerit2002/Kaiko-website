export default function BottomHeading({ title, subtitle , subtitle2}) {
  return (
    <div className="flex justify-between items-center  bg-black my-3 p-8 rounded-lg shadow-lg">
        <div>
            <h2 className="text-4xl font-bold text-white">{title}</h2>
            {subtitle2 && <p className="text-lg text-gray-400">{subtitle2}</p>}
        </div>
      
      <img src={subtitle} alt="Placeholder" className="rounded-lg shadow-lg" />
    </div>
  );
}
