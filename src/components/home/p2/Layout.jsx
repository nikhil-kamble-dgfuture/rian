export default function Layout({ children }) {
    return (
      <div className="min-h-screen relative overflow-x-hidden bg-custom-box">
        {/* Radial gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#873B7A_0%,#682B5E_50%,#512A62_100%)] opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
          {children}
        </div>
      </div>
    );
  }