import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full pt-20 px-6">
        {[
          "Home",
          "Services",
          "Study Abroad",
          "Visa",
          "Programs",
          "About",
          "Join our Team",
          "Blogs",
        ].map((item) => (
          <Link
            key={item}
            href={
              item === "Home"
                ? "/"
                : item === "Join our Team"
                ? "/careers"
                : `/${item.toLowerCase().replace(" ", "-")}`
            }
            className="py-4 text-white text-2xl font-light border-b border-white/10"
            onClick={handleClick}
          >
            {item}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-auto mb-8 py-4 text-center text-white text-2xl font-light bg-blue-600"
          onClick={handleClick}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
