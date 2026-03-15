import { motion } from "motion/react";
import { Mail, Instagram, Facebook, ArrowRight, Utensils, Heart, Star } from "lucide-react";

const boards = [
  {
    id: 1,
    name: "Dobozaink",
    description: "Kisebb és nagyobb válogatások elegáns dobozokban, melyek bárhová könnyen szállíthatók.",
    price: "39.990 Ft-tól (min. 3 doboz)",
    image: "/gallery/image5.jpeg",
  },
  {
    id: 2,
    name: "Teljes asztali dekoráció",
    description: "Komplett catering asztalok professzionális elrendezéssel és dekorációval a helyszínen.",
    price: "Egyedi árajánlat",
    image: "/gallery/IMG_0448.jpg",
  }
];

const galleryImages = [
  "/gallery/image0.jpeg",
  "/gallery/IMG_0315.jpg",
  "/gallery/IMG_0467.jpg",
  "/gallery/IMG_0317.jpg",
  "/gallery/image3.jpeg",
  "/gallery/IMG_0448.jpg",
  "/gallery/IMG_0471.jpg",
  "/gallery/IMG_9404.jpg",
  "/gallery/IMG_9407.jpg",
  "/gallery/IMG_9408.jpg",
  "/gallery/IMG_9412.jpg",
  "/gallery/IMG_9431.jpg",
  "/gallery/IMG_9612.png",
  "/gallery/image1.jpeg",
  "/gallery/image2.jpeg",
  "/gallery/image4.jpeg",
  "/gallery/image5.jpeg"
];

export default function App() {
  const emailAddress = "rendeles@creativecuisine.hu";

  return (
    <div className="min-h-screen selection:bg-stone-200 selection:text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fdfcf8]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-tight font-semibold">
            Creative <span className="italic font-light">Cuisine</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-stone-500">
            <a href="#talaink" className="hover:text-stone-900 transition-colors">Tálaink</a>
            <a href="#galeria" className="hover:text-stone-900 transition-colors">Galéria</a>
            <a href="#rendeles" className="hover:text-stone-900 transition-colors">Rendelés</a>
          </div>
          <a 
            href={`mailto:${emailAddress}`}
            className="bg-stone-900 text-stone-50 px-6 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-all"
          >
            Kapcsolat
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8">
              Művészet az <br />
              <span className="italic font-light text-stone-400">asztalodon.</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-md mb-10 leading-relaxed">
              Exkluzív charcuterie tálak és catering dekorációk, melyek felejthetetlenné teszik az eseményedet.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#talaink" 
                className="flex items-center gap-2 bg-stone-900 text-stone-50 px-8 py-4 rounded-full font-medium hover:gap-4 transition-all"
              >
                Tálak megtekintése <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="/gallery/IMG_9612.png" 
              alt="Creative Cuisine Catering" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm uppercase tracking-[0.2em] mb-2">Rendezvény Catering</p>
              <p className="text-2xl font-serif italic">Teljes asztaldekoráció</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Title Only */}
      <section className="pt-24 pb-8 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif">Szolgáltatásaink</h2>
          </div>
        </div>
      </section>

      {/* Boards Grid */}
      <section id="talaink" className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-stone-400 uppercase tracking-[0.2em] text-sm mb-4">Kínálatunk</p>
              <h2 className="text-5xl font-serif">Kóstolj bele a <span className="italic">kreativitásba</span></h2>
            </div>
            <p className="text-stone-500 max-w-sm">
              Válassz dobozaink közül, vagy kérj egyedi összeállítást a rendezvényedre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {boards.map((board, index) => (
              <motion.div 
                key={board.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative shadow-lg">
                  <img 
                    src={board.image} 
                    alt={board.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">
                    {board.price}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">{board.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{board.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Services Boxes Only */}
      <section className="py-24 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mx-auto md:mx-0">
                <Utensils className="text-stone-400" size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Friss alapanyagok</h3>
              <p className="text-stone-500 leading-relaxed">Csak válogatott sajtokat, felvágottakat, friss zöldségeket és gyümölcsöket használunk.</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mx-auto md:mx-0">
                <Heart className="text-stone-400" size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Szenvedéllyel készül</h3>
              <p className="text-stone-500 leading-relaxed">Minden tálat egyedi kompozícióként, nagy odafigyeléssel és esztétikai érzékkel állítunk össze.</p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mx-auto md:mx-0">
                <Star className="text-stone-400" size={24} />
              </div>
              <h3 className="text-xl font-serif font-medium">Prémium élmény</h3>
              <p className="text-stone-500 leading-relaxed">A látványtól az utolsó falatig minden a minőségről és a vendéglátás öröméről szól.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-stone-400 uppercase tracking-[0.2em] text-sm mb-4">Pillanatképek</p>
            <h2 className="text-5xl font-serif">Munkáink a <span className="italic">gyakorlatban</span></h2>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="break-inside-avoid rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="rendeles" className="py-32 px-6 bg-stone-900 text-stone-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img 
            src="/gallery/IMG_9612.png" 
            alt="Background" 
            className="object-cover w-full h-full"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <p className="text-stone-400 uppercase tracking-[0.2em] text-sm mb-6">Hogyan rendelhetsz?</p>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
              Készen állsz a <br />
              <span className="italic text-stone-400">vendéglátásra?</span>
            </h2>
            
            <div className="space-y-8 mb-16">
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center shrink-0 font-serif">01</div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Válaszd ki a tálat</h4>
                  <p className="text-stone-400">Nézd meg a kínálatunkat és döntsd el, melyik illik legjobban az alkalomhoz.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center shrink-0 font-serif">02</div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Írj nekünk emailt</h4>
                  <p className="text-stone-400">Küldd el a választott tál nevét, a darabszámot és az időpontot a <span className="text-stone-50 font-medium">{emailAddress}</span> címre.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center shrink-0 font-serif">03</div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Visszaigazolás</h4>
                  <p className="text-stone-400">24 órán belül válaszolunk a részletekkel és a fizetési információkkal.</p>
                </div>
              </div>
            </div>

            <a 
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-3 bg-stone-50 text-stone-900 px-10 py-5 rounded-full font-semibold hover:bg-stone-200 transition-all"
            >
              <Mail size={20} /> Rendelés leadása emailben
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-3xl font-serif font-semibold mb-4">
              Creative <span className="italic font-light">Cuisine</span>
            </div>
            <p className="text-stone-400 text-sm max-w-xs">
              Prémium charcuterie élmény, ahol az ízek és az esztétika találkozik.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors">
              <Facebook size={24} />
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-stone-400">
            <p className="mb-2">Budapest & környéke</p>
            <p>&copy; 2026 Creative Cuisine. Minden jog fenntartva.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
