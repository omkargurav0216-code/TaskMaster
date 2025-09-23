function Footer() {
  return (
    <footer className="bg-slate-900 text-baseBg py-6 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm font-poppins">
          © {new Date().getFullYear()} KARYAM: TaskMaster. All rights reserved.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="https://github.com/omkargurav0216-code" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition">
            GitHub
          </a>
          {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition">
            Twitter
          </a> */}
          <a href="mailto:omkargurav0216@gmail.com" className="hover:text-highlight transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
