
import { FiMapPin, FiSearch } from 'react-icons/fi';

const Banenr = ({query ,handleInputChange }) => {

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-24 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find Your <span className="text-blue">New Jobs</span> Today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands Of jobs in the computer, engineering and technology sections are waiting for you
      </p>

      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
          <div className="relative flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus:within:ring-2 focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              placeholder="What position are you looking for?"
              className="black flex-1 border-0 bg-transparent py-2 pl-12 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            onChange={handleInputChange}
            value={query}/>
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus:within:ring-2 focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              placeholder="Location"
              className="black flex-1 border-0 bg-transparent py-2 pl-12 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          
           />
            <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button type='submit' className='bg-blue py-2 px-8 text-gray-100 md:rounded-s-none rounded '>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Banenr;
