
import React from "react";

export default function Page() {
  return (
    <div className="text-slate-800">
      {/* HERO SECTION */}
      <section className="relative bg-[url('/src/assets/july3.avif')] bg-cover bg-center h-96 flex items-center justify-center">
        <div className="bg-black/60 w-full h-full absolute" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">July Revolution in Jashore 2024</h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto">
            Students demand justice, reform, and a voice in their future.
          </p>
        </div>
      </section>

     {/* INTRO SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">What Happened in July?</h2>
        <p className="text-center max-w-3xl mx-auto text-slate-600">
          In July 2024, Jashore became the center of a historic student uprising. 
          Protests erupted demanding quota reform in government jobs. Students from universities and colleges took to the streets, 
          blocking highways and gathering in front of government offices. Their call: end discrimination, ensure fair recruitment, and listen to student voices.
        </p>
      </section>

      {/* PHOTO GRID */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Scenes from the Streets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["july3.avif", "july2.jpg", "july5.jpg"].map((src, i) => (
            <div key={i} className="rounded overflow-hidden shadow hover:shadow-lg transition">
              <img src={`/src/assets/${src}`} alt={`July protest ${i + 1}`} className="w-full h-64 object-cover" />
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
        <p className="text-center text-slate-500 mt-2">
          *Replace with your news coverage or rally footage link*
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
              img: "/src/assets/july1.webp",
            },
            {
              title: "Organizers",
              desc: "Leaders coordinated marches, sit-ins, and media outreach to highlight injustice and ensure their message was heard nationwide.",
              img: "/src/assets/july6.jpg",
            },
            {
              title: "Community Reaction",
              desc: "Local residents watched, some joined, some worried, but all witnessed history as youth demanded accountability.",
              img: "/src/assets/july4.webp",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / FOOTER */}
      <section className="bg-sky-900 text-white text-center py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Support the Movement</h2>
        <p className="max-w-2xl mx-auto mb-4">
          Stand with Jashore’s students in their fight for fair opportunities. Amplify their voices, demand justice, and be part of the change.
        </p>
        {/* <button className="bg-white text-sky-900 px-6 py-2 rounded shadow hover:bg-slate-100 transition">
          Learn More
        </button> */}
      </section>
    </div>
  );
}