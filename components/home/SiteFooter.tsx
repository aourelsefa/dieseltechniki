import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-sans text-lg font-bold text-white">
            Diesel<span className="text-navy-200"> Techniki</span>
          </p>
          <p className="mt-1 text-sm text-navy-300">
            Συνεργείο αυτοκινήτων · Service & επισκευή · Εξειδίκευση diesel
          </p>
          <p className="mt-4 text-sm text-navy-400">&copy; {year} Diesel Techniki. Με την επιφύλαξη παντός δικαιώματος.</p>
        </div>
        <nav aria-label="Σύνδεσμοι υποσέλιδου" className="flex flex-col items-center gap-3 sm:items-end">
          <div className="flex gap-4">
            <a
              href="#"
              className="text-navy-400 transition hover:text-white"
              aria-label="Facebook"
            >
              <AiOutlineFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-navy-400 transition hover:text-white"
              aria-label="Instagram"
            >
              <AiOutlineInstagram className="h-6 w-6" />
            </a>
          </div>
          <Link href="#top" className="text-sm text-navy-300 hover:text-white">
            Επιστροφή στην κορυφή
          </Link>
        </nav>
      </div>
    </footer>
  );
}
