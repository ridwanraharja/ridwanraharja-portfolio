import SkillCard from "../../../components/atoms/SkillCard";
import { skillsData } from "../../../data/skillsData";

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
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              gradientFrom={skill.gradientFrom}
              gradientTo={skill.gradientTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;