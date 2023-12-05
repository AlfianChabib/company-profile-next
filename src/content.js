const history = [
  {
    title: "Awal Mula",
    description:
      "DMGP didirikan pada tahun 2020 sebagai tanggapan terhadap perubahan cepat dalam dunia pemasaran dan teknologi. Visi kami adalah membantu bisnis menghadapi tantangan digital era ini dan tumbuh secara berkelanjutan.",
  },
  {
    title: "Misi Kami",
    description:
      "Dari awal, misi kami adalah memberikan solusi pemasaran digital yang inovatif dan efektif kepada klien kami. Kami percaya bahwa setiap bisnis memiliki potensi untuk sukses dalam lingkungan digital, dan kami berkomitmen untuk membantu mereka mencapai tujuan mereka.",
  },
  {
    title: "Pertumbuhan dan Inovasi",
    description:
      "Dalam beberapa tahun pertama, DMGP berkembang pesat, menarik tim berbakat dan memperluas layanan kami. Kami terus berinovasi untuk tetap selaras dengan tren terbaru dalam pemasaran digital, memastikan klien kami mendapatkan keunggulan kompetitif.",
  },
  {
    title: "Pengakuan Industri",
    description:
      "Dalam perjalanan kami, DMGP menerima sejumlah penghargaan dan pengakuan industri yang memperkuat komitmen kami terhadap kualitas dan keunggulan. Ini mencakup Best Selling, Top 10, dan Top 100.",
  },
  {
    title: "Ekspansi Global",
    description:
      "Dengan semakin globalnya bisnis-bisnis yang kami layani, DMGP memutuskan untuk melakukan ekspansi global pada tahun 2021. Langkah ini memungkinkan kami untuk melayani klien-klien di seluruh dunia dan mendapatkan pengalaman berharga dalam berbagai industri.",
  },
  {
    title: "Masa Depan yang Cerah",
    description:
      "Dengan fondasi yang kuat dan tim yang berdedikasi, DMGP terus melangkah maju dengan keyakinan bahwa masa depan membawa peluang baru dan prestasi yang lebih besar. Kami berkomitmen untuk tetap menjadi mitra pilihan dalam pemasaran digital bagi bisnis di seluruh dunia.",
  },
];

const culture = [
  {
    title: "Digital Excellence",
    description:
      "Di DMGP, kami memahami bahwa era digital membutuhkan keunggulan dalam segala hal. Kami mengutamakan standar keunggulan dalam setiap aspek pekerjaan kami. Dari strategi pemasaran hingga implementasi kampanye, tim kami selalu berusaha memberikan yang terbaik, memanfaatkan teknologi terkini, dan mengadopsi praktik terbaik dalam industri.",
  },
  {
    title: "Kolaborasi yang Mempertajam",
    description:
      "Kami percaya bahwa kekuatan terbesar kami terletak dalam kerja sama tim yang kokoh. Di DMGP, setiap individu dihargai dan kontribusi mereka diakui. Kami membangun lingkungan di mana ide-ide beragam dan perspektif berpadu untuk menciptakan solusi yang inovatif. Kolaborasi adalah kunci kesuksesan, dan kami berkomitmen untuk terus tumbuh bersama.",
  },
  {
    title: "Inovasi sebagai Pondasi",
    description:
      "Dalam dunia yang terus berubah, kami memandang inovasi sebagai pondasi bisnis kami. Kami mendorong kreativitas dan pemikiran out-of-the-box di setiap level organisasi. Dari pengembangan produk baru hingga strategi pemasaran yang revolusioner, kami memberdayakan tim kami untuk terus menciptakan dan mengimplementasikan ide-ide yang mengubah paradigma.",
  },
  {
    title: "Fleksibilitas dan Keseimbangan Kehidupan",
    description:
      "Di DMGP, kami menghargai keseimbangan antara pekerjaan dan kehidupan pribadi. Kami memahami bahwa karyawan yang bahagia dan seimbang memiliki produktivitas yang lebih tinggi. Oleh karena itu, kami menyediakan lingkungan kerja yang mendukung fleksibilitas, memungkinkan karyawan kami untuk mencapai keseimbangan yang optimal antara tuntutan pekerjaan dan kehidupan pribadi mereka.",
  },
  {
    title: "Keterbukaan dan Komunikasi Terbuka",
    description:
      "Komunikasi yang terbuka adalah kunci untuk mencapai visi bersama. Kami mendorong keterbukaan dan transparansi di setiap tingkat organisasi. Baik dalam kesuksesan maupun tantangan, kami menghargai komunikasi yang jujur, menghormati pendapat setiap individu, dan bekerja sama untuk mencapai tujuan bersama.",
  },
  {
    title: "Kepemimpinan yang Mendorong Pertumbuhan",
    description:
      "Kami memiliki tim kepemimpinan yang berkomitmen untuk mengembangkan potensi setiap anggota tim. Melalui pembinaan, pelatihan, dan umpan balik yang konstruktif, kami membantu karyawan kami untuk tumbuh secara pribadi dan profesional. Kepemimpinan di DMGP tidak hanya tentang mengarahkan, tetapi juga memberdayakan.",
  },
];

import seo from "../public/images/seo.png";
import socialMedia from "../public/images/social-media.png";
import ppc from "../public/images/ppc.png";
import smart from "../public/images/smart.png";
import writer from "../public/images/writer.png";
import webDesign from "../public/images/web-design.png";

const service = [
  {
    title: "Social Media",
    description:
      "Mengelola kehadiran online Anda dengan kreatifitas dan strategi. Tim kami merancang dan melaksanakan kampanye media sosial yang menarik untuk membangun komunitas, meningkatkan keterlibatan, dan memperkuat identitas merek Anda di platform-platform utama.",
    icon: socialMedia,
  },
  {
    title: "SEO",
    description:
      "Menempatkan bisnis Anda di puncak hasil pencarian. Layanan SEO kami memanfaatkan praktik terbaik untuk meningkatkan peringkat situs web Anda di mesin pencari, meningkatkan visibilitas online, dan membantu Anda menjangkau audiens yang relevan.",
    icon: seo,
  },
  {
    title: "Periklanan PPC",
    description:
      "Mengoptimalkan iklan Anda untuk hasil terbaik. Kami merancang dan mengelola kampanye periklanan berbayar yang cermat, memastikan setiap klik bernilai tinggi dan mendukung tujuan bisnis Anda dengan meningkatkan konversi.",
    icon: ppc,
  },
  {
    title: "Strategi Pemasaran",
    description:
      "Menghadirkan pendekatan holistik untuk merancang strategi pemasaran yang sukses. Tim kami bekerja sama untuk menyusun rencana pemasaran digital yang terintegrasi, memastikan setiap elemen bekerja bersama untuk mencapai tujuan bisnis Anda.",
    icon: smart,
  },
  {
    title: "Web Design and Development",
    description:
      "Membuat kesan pertama yang tak terlupakan. Layanan desain dan pengembangan web kami mencakup pembuatan situs web yang responsif, estetis, dan fungsional. Ini tidak hanya menciptakan pengalaman pengguna yang luar biasa tetapi juga mendukung upaya pemasaran digital Anda.",
    icon: webDesign,
  },
  {
    title: "Content Marketing",
    description:
      "Menarik, relevan, dan berharga. Tim konten kami menciptakan materi konten yang menginspirasi, mendidik, dan terhubung dengan audiens Anda. Mulai dari blog hingga video, kami memanfaatkan berbagai format untuk meningkatkan kehadiran online Anda dan membangun otoritas di industri Anda.",
    icon: writer,
  },
];

const testimonials = [
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Martin escobar",
    title: "Founder of meta",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Angela stian",
    title: "Product designer",
    quote:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Karim ahmed",
    title: "DevOp engineer",
    quote:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
  },
];

export { history, culture, service, testimonials };
