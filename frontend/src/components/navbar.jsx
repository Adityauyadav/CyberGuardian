

function Navbar(){
  return (
    <div className="rounded-2xl shadow-md p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">Phishing Detection</h2>
      <input 
        type="text" 
        placeholder="Enter URL" 
        className="border rounded p-2 w-full mb-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Check
      </button>
      <div className="mt-3 text-gray-700">
        Result will appear here
      </div>
    </div>
  );
}


export default Navbar;