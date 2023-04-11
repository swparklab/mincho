import portfolioimage from '../img/portfolio.jpg'

function PortfolioCard() {
  return (
    <li className="bg-green-200 w-60 h-72 rounded-xl">
      <div className="bg-green-300 w-full h-1/2 rounded-t-xl">
        <img src={portfolioimage} alt="portfolioimage" />
      </div>
      <div className="text-xl font-bold mt-2 mx-2">민팅원</div>
      <div className="mt-2 mx-2">
        아르떼뮤지엄 다녀온 사진 정리
      </div>
    </li>
  );
}

export default PortfolioCard;
