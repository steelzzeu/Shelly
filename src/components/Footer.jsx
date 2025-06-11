export default function Footer() {
  return (
    <footer className="border-t border-[#22304b] bg-ssrp-navy/90 backdrop-blur py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 shadow-inner">
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <span className="font-bold text-accent">Sunshine State RP</span>
        <span className="text-gray-500">|</span>
        <a href="https://discord.gg/ssrp" className="hover:text-accent underline" target="_blank" rel="noopener noreferrer">
          Discord
        </a>
        <span className="text-gray-500">|</span>
        <a href="/resources" className="hover:text-accent underline">
          Docs
        </a>
        <span className="text-gray-500">|</span>
        <a href="/terms" className="hover:text-accent underline">
          Terms
        </a>
        <span className="text-gray-500">|</span>
        <a href="/support" className="hover:text-accent underline">
          Staff Support
        </a>
      </div>
      <div>
        <span className="text-xs">Not affiliated with Rockstar Games or Take-Two Interactive | &copy; {new Date().getFullYear()} SSRP</span>
      </div>
    </footer>
  );
}