import { Footer } from "../../components/Footer";
import Topbar from "../../components/Topbar";
import { BusinessList } from "./BusinessList";
import { CategoryHero } from "./CategoryHero";

export const CategoryPage = () => {
  return (
    <div className="flex flex-col gap-[70px]">
      <Topbar />
      <CategoryHero />
      <BusinessList />
      <Footer />
    </div>
  );
};
