
// Import all images like variables
import july1 from "../../assets/JuLy/july1.webp";
import july7 from "../../assets/JuLy/WhatsApp Image 2025-07-02 at 09.57.07.jpeg";
import july8 from "../../assets/JuLy/WhatsApp Image 2025-07-02 at 09.57.08.jpeg";
import july9 from "../../assets/JuLy/WhatsApp Image 2025-07-02 at 09.57.09.jpeg";
import july10 from "../../assets/JuLy/WhatsApp Image 2025-07-02 at 09.57.11 (1).jpeg";
import july11 from "../../assets/JuLy/WhatsApp Image 2025-07-02 at 09.57.11.jpeg";
import july12 from "../../assets/JuLy/WhatsApp Image 2025-07-02 at 09.57.12.jpeg";

export default function Page() {
  return (
    <div className="text-slate-800 font-sans">
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
        style={{ backgroundImage: `url(${july7})` }}
      >
        <div className="bg-black/60 w-full h-full absolute" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            July Revolution in Jashore 2024
          </h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto text-justify">
            Students demand justice, reform, and a voice in their future.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">What Happened in July?</h2>
        <p className="max-w-3xl mx-auto text-slate-600 text-justify">
          In July 2024, Jashore became the center of a historic student uprising.
          Protests erupted demanding quota reform in government jobs. Students from
          universities and colleges took to the streets, blocking highways and
          gathering in front of government offices. Their call: end discrimination,
          ensure fair recruitment, and listen to student voices.
        </p>
      </section>

      {/* PHOTO GRID */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Scenes from the Streets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[july10, july11, july12].map((src, i) => (
            <div
              key={i}
              className="rounded overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={src}
                alt={`July protest ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-sky-50 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Watch The Protest Coverage</h2>
        <div className="max-w-4xl mx-auto aspect-video shadow-lg rounded overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/46ALvk6jJXg"
            title="July Revolution Video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center text-slate-500 mt-2 font-sans">
          News coverage footage link
        </p>
      </section>

      {/* STORY CARDS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Voices of the Movement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Students",
              desc: "United under one banner for fair opportunity, students faced threats and attacks but remained steadfast in their demand for reform.",
              img: july1,
            },
            {
              title: "Organizers",
              desc: "Leaders coordinated marches, sit-ins, and media outreach to highlight injustice and ensure their message was heard nationwide.",
              img: july9,
            },
            {
              title: "Community Reaction",
              desc: "Local residents watched, some joined, some worried, but all witnessed history as youth demanded accountability.",
              img: july8,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition font-sans"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-justify">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / FOOTER */}
      <section className="bg-sky-900 text-white text-center py-8 font-sans">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Support the Movement</h2>
        <p className="max-w-2xl mx-auto mb-4 text-center">
          Stand with Jashore’s students in their fight for fair opportunities. Amplify
          their voices, demand justice, and be part of the change.
        </p>
      </section>
    </div>
  );
}
