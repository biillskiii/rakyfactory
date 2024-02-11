import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [openItems, setOpenItems] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleOpen = (index) => {
    const newOpenItems = openItems.map((item, i) =>
      i === index ? !item : false
    );
    setOpenItems(newOpenItems);
  };
  return (
    <div className="bg-[#FCFCFC]">
      <div className="my-44 max-h-[300px] flex items-start p-3 container mx-auto px-40 py-10 justify-between gap-20">
        <div className="w-[492px]  flex flex-col items-start justify-start  gap-y-5">
          <p>Frequently Asked Questions (FAQ)</p>
          <h1 className="font-bold text-3xl">
            Apa itu <span className="text-P2">Rakyfactory Swiftcut</span>?
          </h1>
          <p className="text-sm">
            Rakyfactory Swiftcut adalah salah satu layanan Rakyfactory berupa
            pengeditan video pendek yang menyediakan tim konten pribadi untuk
            Anda, terdiri dari beberapa Video Editor dan Manager konten. <br />{" "}
            <br /> Dengan berlangganan, Anda dapat mengakses permintaan konten
            sebanyak mungkin tanpa kontrak dan biaya tambahan, sehingga Anda
            bisa fokus mempersiapkan bahan kontennya saja atau bahkan
            mengerjakan tugas lainnya tanpa terganggu.
          </p>
        </div>
        <div className="w-[550px]">
          {openItems.map((isOpen, index) => (
            <div key={index} className="mb-2">
              <Accordion
                open={isOpen}
                className="rounded-lg border border-blue-gray-100 px-4"
              >
                <AccordionHeader
                  onClick={() => handleOpen(index)}
                  className="border-b-0 text-sm flex justify-between items-center cursor-pointer"
                >
                  {index === 0 &&
                    "Kenapa saya tidak memperkerjakan freelancer sendiri saja?"}
                  {index === 1 && "Berapa lama saya bisa menerima konten saya?"}
                  {index === 2 && "Bagaimana cara kerja berlangganan jeda?"}
                  {index === 3 && "Berapa banyak video yang saya dapatkan?"}
                  {index === 4 &&
                    "Apa maksud 1 permintaan dan 2 permintaan dalam 1 waktu?"}
                  <IoIosArrowDown
                    className={`ms-auto -mr-2 transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    } transition-transform`}
                  />
                </AccordionHeader>
                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } overflow-hidden transition-height`}
                >
                  <AccordionBody className="pt-0 text-xs font-normal">
                    {index === 0 &&
                      "Mengelola freelancer bisa merepotkan, dari proses rekrut hingga hasil kerja dan monitoring. Kami menghilangkan risiko itu dengan mengelola semua aspek untuk Anda. Dengan berlangganan, Anda bisa menjeda dan melanjutkan langganan sesuai kebutuhan, membayar tim pribadi hanya saat pekerjaan benar-benar ada."}
                    {index === 1 &&
                      "Sebagian besar permintaan diselesaikan hanya dalam 24-48 jam. Namun, permintaan yang lebih kompleks bisa memakan waktu lebih lama."}
                    {index === 2 &&
                      "Kami paham jika Anda hanya memiliki sedikit permintaan konten selama berlangganan. Untuk itu, kami memperkenalkan opsi jeda langganan. Dengan siklus penagihan 31 hari, jika Anda menggunakan layanan selama 21 hari dan kemudian menjeda langganan, siklus penagihan akan berhenti. Sisa 10 hari layanan dapat Anda gunakan kapan saja tanpa batas waktu kedaluwarsa."}
                    {index === 3 &&
                      "Setiap jenis konten akan dikategorikan berdasarkan tingkat kesulitan. Jika konten Anda termasuk kategori mudah dengan waktu pengeditan 24 jam, Anda akan menerima sekitar 31 konten selama masa langganan, jumlahnya dapat bervariasi tergantung pada tingkat kesulitan masing-masing konten."}
                    {index === 4 &&
                      "Setelah berlangganan, Anda bisa menambahkan sebanyak mungkin permintaan ke dalam antrean. Seperti antrean streaming lagu di Spotify, kami kerjakan 1-per-1 hingga selesai. Bergantung pada paketnya, kami juga bisa menangani 2 permintaan sekaligus, sehingga Anda mendapatkan 2 konten dalam sekali pengiriman."}
                  </AccordionBody>
                </div>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
