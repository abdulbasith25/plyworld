import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactIcons = () => {
  const phoneNumber = "9048214175";
  const whatsappNumber = "9048214175";
  const whatsappMessage = "Hello! I want to know more.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex justify-between items-center px-4 mt-4">
      {/* Call Icon */}
      <a href={`tel:${phoneNumber}`} className="flex items-center">
        <FiPhoneCall className="text-blue-500 text-4xl hover:text-blue-600 align-middle" />
      </a>

      {/* WhatsApp Icon */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
        <FaWhatsapp className="text-green-500 text-4xl hover:text-green-600 align-middle" />
      </a>
    </div>
  );
};

export default ContactIcons;
