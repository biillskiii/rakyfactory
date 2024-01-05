import React, { useEffect } from "react";
import Pen9 from "../assets/Pen9.png";
import Faq from "./Accordion";
import Aos from "aos";
const FaQ = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <div id="faq"></div>
      <div className="my-48">
        <div className="w-11/12 sm:w-9/12 rounded-xl text-start mx-auto">
          <div className="w-full flex justify-start sm:justify-center items-center">
            <img
              src={Pen9}
              alt="pen9"
              className="-mt-10 -ml-8"
              width={100}
              style={
                window.matchMedia("(max-width: 640px)").matches
                  ? { width: 40, marginRight: 28 }
                  : {}
              }
            />
            <p className="font-bold text-3xl sm:text-5xl mb-20 pt-9">
              {" "}
              Pertanyaan umum
            </p>
          </div>

          <Faq
            question={"Kenapa saya harus berlangganan?"}
            answer={
              "Kami memahami bahwa mungkin Anda merasa terbebani jika kami meminta Anda untuk menyiapkan sejumlah permintaan konten sekaligus untuk memenuhi jumlah paketan seperti layanan pada umumnya.Terlebih lagi, layanan seperti ini biasanya freelance, yang mungkin menimbulkan kesan kesulitan dalam melakukan transaksi berulang ketika menggunakan layanan serupa. Oleh karena itu, kami berupaya memberikan fleksibilitas permintaan konten, pembayaran, dan standar konten dengan menghadirkan fitur berlangganan jeda pada layanan kami. Tidak hanya itu, setiap paket dalam langganan ini mencakup permintaan tanpa batas, revisi tanpa batas, dan biaya berlangganan yang tetap. Selain itu, model ini dapat menjadi sumber motivasi untuk mencapai konsistensi dalam pembuatan konten, karena kita semua tahu bahwa kunci kesuksesan dalam konten adalah konsistensi."
            }
          />
          <Faq
            question={
              "Apa bedanya jika saya langsung memesan 30 konten sekaligus secara freelance?"
            }
            answer={
              "Ada beberapa perbedaan signifikan antara memesan 30 konten sekaligus secara freelance dan menggunakan layanan berlangganan kami. Pertama, biaya yang kami tawarkan adalah FLAT, yang berarti tidak akan ada biaya tambahan yang muncul secara mendadak. Selain itu, revisi juga kami sediakan tanpa biaya tambahan, memberikan fleksibilitas tanpa batas dalam mengatasi perubahan yang mungkin diperlukan. Begitu juga dengan cara berlangganan, kami memberikan nilai tambah yang berbeda. Kami beroperasi sebagai sebuah tim untuk Anda, yang bertujuan untuk menciptakan kolaborasi yang lebih efisien. Dengan menjadi bagian dari satu WhatsApp grup bersama Anda, Anda akan merasa seolah memiliki tim konten sendiri, memudahkan koordinasi dan komunikasi.Kami juga menawarkan fleksibilitas fitur jeda, sehingga Anda dapat menggunakan layanan kami sesuai kebutuhan Anda. Tak perlu khawatir untuk menyiapkan 30 konten sekaligus, berikan permintaan konten secara berkala dan jeda langganan jika tidak ada kebutuhan."
            }
          />
          <Faq
            question={"Bagaimana cara kerja satu permintaan dalam satu waktu?"}
            answer={
              "Sama seperti antrean streaming satu lagu di Spotify dalam satu waktu, permintaan dikerjakan satu per satu hingga selesai."
            }
          />
          <Faq
            question={"Bagaimana cara kerja fitur jeda?"}
            answer={
              "Kami memahami Anda mungkin tidak memiliki cukup permintaan untuk diisi sepanjang berlangganan. Mungkin saat ini Anda hanya memiliki satu atau dua permintaan konten. Di situlah menjeda langganan Anda berguna. Siklus penagihan didasarkan pada periode 31 hari. Katakanlah Anda mendaftar dan menggunakan layanan ini selama 21 hari, lalu memutuskan untuk menjeda langganan Anda. Ini berarti siklus penagihan akan dijeda dan Anda memiliki sisa layanan 10 hari untuk digunakan kapan saja di masa mendatang."
            }
          />
          <Faq
            question={"Bagaimana jika saya hanya mempunyai satu permintaan?"}
            answer={
              "Tidak apa-apa. Anda dapat menjeda langganan Anda setelah selesai dan kembali lagi ketika Anda memiliki kebutuhan konten lagi. Tidak perlu menyia-nyiakan sisa langganan Anda."
            }
          />
          <Faq
            question={
              "Kenapa saya tidak memperkerjakan freelancer sendiri saja?"
            }
            answer={
              "Bisa saja, tapi mengelola orang itu pusing. Proses mencarinya, hasil pengerjaannya, bahkan komunikasinya belum tentu cocok dengan Anda. Kami menghilangkan semua risiko dengan mengelola semua hal untuk Anda. Dengan paket bulanan, Anda dapat menjeda dan melanjutkan langganan sesering yang diperlukan untuk memastikan Anda hanya membayar tim konten Anda saat pekerjaan tersedia untuk mereka."
            }
          />
          <Faq
            question={"Apakah Anda yakin ini membantu saya berkembang?"}
            answer={
              "Setiap konten yang sukses adalah konten yang relevan bagi audiensnya. Kami tidak bisa menjamin pertumbuhan, tapi kami pastikan membantu Anda membuat konten terbaik. Kami memiliki tim konsultasi berpengalaman untuk berdiskusi dengan Anda dalam perencanaan konten Anda."
            }
          />
          <Faq
            question={
              "Apakah ada batasan berapa banyak permintaan yang dapat saya ajukan?"
            }
            answer={
              <p>
                Setelah berlangganan, Anda dapat menambahkan permintaan ke
                antrean sebanyak mungkin, dan permintaan tersebut akan
                dikirimkan satu per satu (dua sekaligus jika Anda membeli paket
                tambahan berupa "Team Boost") hingga semuanya selesai.
              </p>
            }
          />
          <Faq
            question={"Berapa lama saya bisa menerima konten saya?"}
            answer={
              "Sebagian besar permintaan diselesaikan hanya dalam dua hari atau kurang. Namun, permintaan yang lebih kompleks bisa memakan waktu lebih lama."
            }
          />
          <Faq
            question={"Berapa banyak video yang saya dapatkan?"}
            answer={
              "Dengan rata-rata waktu penyelesaian dalam 2 hari, pelanggan biasanya menerima sekitar 16 video. Namun, jumlah ini dapat bervariasi tergantung pada tingkat kesulitan dari permintaan Anda. Jika permintaan videonya relatif mudah, maka kami dapat menyelesaikannya lebih cepat, dan Anda mungkin akan menerima lebih banyak video dalam periode yang sama."
            }
          />
        </div>
      </div>
    </>
  );
};

export default FaQ;
