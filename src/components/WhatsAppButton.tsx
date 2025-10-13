import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919664665685"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
