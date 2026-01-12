export function Header() {
  return (
   <main className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
      <div className="mx-auto max-w-5xl p-4 md:p-8">
        <header>
   
          <a className="group" href="/">
            <div className="inline-flex items-center gap-4">
              <img
                src="/images/flower-vector_1.svg"
                alt="Flower"
                className="h-16 transition group-hover:scale-105 group-hover:-rotate-6 md:h-20 lg:h-24"
              />
              <p className="text-lg font-semibold">Plantpix</p>
            </div>
          </a>
          <div className="mt-6">
            <h1 className="text-lg font-bold">Nice Flowers</h1>
            <p className="text-slate-600">
              Don't take our word — let the pictures do the talking !
            </p>
          </div>
        </header>
        </div>
    </main>
  );
}