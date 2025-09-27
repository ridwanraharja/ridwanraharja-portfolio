import { SiEthereum } from "react-icons/si";
import { HiServer } from "react-icons/hi";
import { FaCube } from "react-icons/fa";

function Overview() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <span className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider">INTRODUCTION</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-12 leading-tight">
          Overview.
        </h2>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl mb-16 mx-auto">
          A Senior Full Stack Developer with over 6 years of hands-on experience in designing, 
          developing, and deploying backend systems, Dapps, and Web3 applications. Proficient in 
          Nodejs, TypeScript, Reactjs, Web3 tools and a range of blockchain technologies, including 
          EVM, Solidity, and ERC standards. Strong background in fullstack engineering, blockchain 
          indexing, and web3 interactions. Proven track record of delivering secure, scalable 
          solutions and working effectively in distributed global teams. Passionate about advancing 
          blockchain interoperability and creating innovative DeFi solutions.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 text-center hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors">
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                <SiEthereum className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Web3 Developer</h3>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 text-center hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors">
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                <HiServer className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Backend Developer</h3>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 text-center hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors">
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                <FaCube className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Blockchain Developer</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;