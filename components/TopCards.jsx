const TopCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 p-4">
      <div className="top_card_div">
        <div className="flex flex-col w-full pb-4">
          <p className="text-xl font-bold">$16,894</p>
          <p className="text-gray-500">Daily Revenue</p>
        </div>
        <p className="top_card_g">
          <span className="text-lg text-green-700">+18%</span>
        </p>
      </div>
      <div className="top_card_div">
        <div className="flex flex-col w-full pb-4">
          <p className="text-xl font-bold">$64,894</p>
          <p className="text-gray-500">Monthly Revenue</p>
        </div>
        <p className="bg-red-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-lg text-red-700">-26%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-xl font-bold">$6,09,289</p>
          <p className="text-gray-500">Yearly Revenue</p>
        </div>
        <p className="top_card_g">
          <span className="text-lg text-green-700">+80%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
