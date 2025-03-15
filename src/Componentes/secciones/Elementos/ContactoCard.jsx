import React from "react";
import { MdOutgoingMail } from "react-icons/md";
const ContactoCard = () => {
    const email = "pablovukovich@gmail.com";
    const handleGmailRedirect = () => {
      window.open(
        "https://forms.gle/QvANRYV2T2CTU3bo9",
        "_blank"
      );
    };

  return (
    <div className="min-h-auto  text-[#FCDDE4] my-10 w-2/6 flex items-center justify-center dark:bg-sexto">
      <div className="p-6 bg-[#EECFD7]  rounded-2xl shadow-lg sm:w-full  text-center flex flex-col items-center dark:bg-third">
        <h2 className="text-2xl font-bold text-quinto mb-4">Contactame</h2>
        
        <div className="bg-[#FCDDE4] p-4 rounded-xl shadow-md w-44 flex justify-center items-center dark:bg-black"  onContextMenu={(e) => e.preventDefault()}>
          <p className="text-[#070405] font-semibold text-lg text-center flex justify-center items-center"><MdOutgoingMail className="w-20 h-20 animate-bounce dark:text-quinto " /></p>
        </div>

        <div className="mt-6">
          <button onClick={handleGmailRedirect} className="px-6 py-2 bg-[#DD9FAF] text-[#070405] font-bold rounded-xl shadow-md hover:bg-[#FCDDE4] transition">
            Enviar email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactoCard ;