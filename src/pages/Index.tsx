
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { LinksContainer } from "@/components/links/LinksContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-4 py-8 sm:px-6">
        <ProfileHeader className="mb-8" />
        <LinksContainer />

        {/* Footer */}
        <footer className="mt-12 mb-4 text-center text-xs text-gray-500">
          <p>© 2025 Ruthwik Reddy. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
