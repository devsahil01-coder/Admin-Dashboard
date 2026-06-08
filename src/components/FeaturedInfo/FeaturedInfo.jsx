
import { FaUsers, FaDollarSign } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";

const cards = [
  {
    title: "Users",
    value: "1,245",
    icon: FaUsers,
  },
  {
    title: "Sales",
    value: "$4,560",
    icon: HiTrendingUp,
  },
  {
    title: "Revenue",
    value: "$12,340",
    icon: FaDollarSign,
  },
  {
    title: "Products",
    value: "320",
    icon: MdInventory,
  },
];

const FeaturedInfo = () => {
  return (
     <div className="p-6 mt-9 md:mt-20 min-h-[10rem]">
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white shadow-md rounded-lg py-5 px-8 flex  h-[10rem] justify-between items-center"
          >
            <div>
              <h3 className="text-gray-500 text-xl mb-2 ">{card.title}</h3>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>

            <card.icon className="text-3xl text-gray-600" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedInfo
