function CompanyLogos() {
  const companies = [
    "airbnb",
    "Microsoft",
    "duolingo",
    "NETFLIX",
    "Disney",
    "airbnb",
    "Meta",
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-40 text-slate-600 dark:text-slate-500">
      {companies.map((company, index) => (
        <span key={`${company}-${index}`} className="text-sm font-medium">
          {company}
        </span>
      ))}
    </div>
  );
}

export default CompanyLogos;
