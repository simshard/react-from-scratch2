export function Header() {
  return (
        <header>
          <a className="group" href="/">
            <div className="inline-flex items-center gap-4">
              <img
                src="/images/flower-vector_1.svg"
                alt="Flower"
                className="h-16 transition group-hover:scale-115 group-hover:-rotate-16 md:h-20 lg:h-24"
              />
              <p className="text-lg font-semibold">Planetpix</p>
            </div>
          </a>
          <div className="mt-6">
            <h1 className="text-lg font-bold">groovy stuff</h1>
            <p className="text-slate-600">
              Don't take our word — let the pictures do the talking !
            </p>
          </div>
        </header>

  );
}