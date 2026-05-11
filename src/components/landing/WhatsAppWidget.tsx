const WhatsAppWidget = () => {
  const phone = "237679747611";
  const msg = encodeURIComponent("Bonjour, je souhaite obtenir des renseignements.");
  const href = `https://wa.me/${phone}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 group flex items-center gap-3 pl-4 pr-5 py-3 rounded-full shadow-elegant text-white font-semibold transition-smooth hover:scale-105"
      style={{ backgroundColor: "#25D366" }}
    >
      <span className="relative grid place-items-center w-10 h-10 rounded-full bg-white/15">
        <span className="absolute inset-0 rounded-full animate-pulse-ring" style={{ backgroundColor: "#25D366" }} />
        <svg viewBox="0 0 32 32" className="relative w-6 h-6 fill-white" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.344 2.521-1.119.137-.293.247-.59.247-.91 0-.066-.014-.13-.029-.183-.044-.157-2.394-1.43-2.522-1.499zM16.045 4.747C9.583 4.747 4.34 9.99 4.34 16.452c0 2.063.534 4.082 1.553 5.86l-1.94 5.658 5.853-1.872A11.62 11.62 0 0016.045 28c6.46 0 11.703-5.243 11.703-11.704S22.505 4.747 16.045 4.747zm0 21.41c-1.834 0-3.626-.488-5.182-1.43l-.358-.215-3.626 1.16 1.175-3.526-.243-.387a9.61 9.61 0 01-1.477-5.105c0-5.343 4.367-9.71 9.71-9.71s9.71 4.367 9.71 9.71-4.367 9.71-9.71 9.71z" />
        </svg>
      </span>
      <span className="hidden sm:inline text-sm leading-tight">
        Pour tout renseignement,<br />contactez-nous
      </span>
    </a>
  );
};

export default WhatsAppWidget;
