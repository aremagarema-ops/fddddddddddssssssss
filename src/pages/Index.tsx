import { CompetitionHeader } from "@/components/competition-header"
import { SearchSection } from "@/components/search-section"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-12">
        <CompetitionHeader />
        <SearchSection />
      </div>
    </div>
  );
};

export default Index;
