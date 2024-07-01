import Configuration from "@/components/themes/components/configuration";
import {Showcase} from "@/components/themes/components/showcase";

export default function ThemesPage() {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto mt-12">
      <Configuration />
      <Showcase />
    </div>
  );
}
