import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <ul className="bg-green-200 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </ul>
  );
}

export default Portfolio;
