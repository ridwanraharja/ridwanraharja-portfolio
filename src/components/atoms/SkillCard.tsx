import type { IconType } from "react-icons";

interface SkillCardProps {
  icon: IconType;
  title: string;
  gradientFrom: string;
  gradientTo: string;
}

const SkillCard = ({ icon: Icon, title, gradientFrom, gradientTo }: SkillCardProps) => (
  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 text-center hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors">
    <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
    </div>
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
  </div>
);

export default SkillCard;