export default function AuthLayout({ title, subtitle, children }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-charcoal mb-2">
            {title}
          </h1>
          <p className="text-muted mb-6 text-base">
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    );
  }
  