import minchologo from '../img/minchologo.png'

function CompanyProfile() {
  return (
      <div className="max-w-screen-xl mx-auto py-12">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img src={minchologo} alt="minchologo" className="w-80 h-auto" />
          </div>
          <div className="pr-12">
            <h1 className="text-3xl font-bold mb-4">민초가 세상을 지배한다!</h1>
            <p className="text-gray-700 leading-7">
            <p className="text-sm text-gray-600 mb-8">저희 회사는 민트초코를 세상을 지배하는 대표적인 제품으로 선보이는 것을 목표로 하고 있습니다.</p>
              <div className="flex justify-between mb-8">
                <div className="flex-1 p-4 bg-white shadow-lg rounded-lg">
                  <h2 className="text-sm font-bold text-gray-800 mb-2">뛰어난 제품과 서비스 제공</h2>
                  <p className="text-sm text-gray-600">우리는 최신 기술과 재료를 사용하여 맛, 향, 그리고 품질을 유지하며, 지속적인 연구와 개발을 통해 더욱 발전하는 기업이 될 것입니다.</p>
                </div>
              <div className="flex-1 p-4 bg-white shadow-lg rounded-lg ml-4">
                  <h2 className="text-sm font-bold text-gray-800 mb-2">지속 가능한 경영 추구</h2>
                  <p className="text-sm text-gray-600">우리는 환경 보호와 사회적 책임을 중요하게 생각하며, 이를 바탕으로 일하고 있습니다.</p>
              </div>
              <div className="flex-1 p-4 bg-white shadow-lg rounded-lg ml-4">
                  <h2 className="text-sm font-bold text-gray-800 mb-2">지속 가능한 경영 추구</h2>
                  <p className="text-sm text-gray-600">우리는 환경 보호와 사회적 책임을 중요하게 생각하며, 이를 바탕으로 일하고 있습니다.</p>
              </div>
            </div>
          <p className="text-sm text-gray-600 mb-8">우리 회사는 민트초코를 좋아하는 모든 분들의 사랑과 지지를 받으며, 민트초코를 세상을 지배하는 대표적인 제품으로 만들기 위해 노력할 것입니다.</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;