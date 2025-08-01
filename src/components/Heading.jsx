export default function Heading({ title, subtitle }) {
  return (
    <div className="flex justify-between items-center  bg-black my-3 p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      <p className="text-lg text-gray-400 text-right">{subtitle}</p>
    </div>
  );
}
