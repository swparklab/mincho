import minchologo from '../img/minchologo.png'

function Header() {
  return (
    <header className="bg-green-300 h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <div className="w-1/4 mx-4">
        <img src={minchologo} alt="minchologo" style={{ width: '100px', height: 'auto' }} />
        </div>
        <ul className="flex text-xl font-medium md:text-base gap-2 md:gap-8 mx-8">
          <li>Brain</li>
          <li>CELL</li>
          <li>WASTE</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;