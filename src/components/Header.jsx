export function Header() {
  return (
    <header>
      {/* Logo */}
      <a className="group" href="/">
        <div className="inline-flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="DevPups"
            className="h-16 transition group-hover:scale-105 group-hover:-rotate-6 md:h-20 lg:h-24"
          />
          <p className="text-lg font-semibold">Dev Pups</p>
        </div>
      </a>
      {/* Hero copy */}
      <div className="mt-6">
        <h1 className="text-lg font-bold">I want to change this text</h1>
        <p className="text-slate-600">
          This is merely didactic text to show where the header copy will go.
        </p>
      </div>
    </header>
  );
}