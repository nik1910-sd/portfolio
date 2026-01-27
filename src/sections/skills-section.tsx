import React from 'react';
import Section from "../components/section";

interface SkillGroup {
  category: string;
  skills: string[];
}

const SkillsSection: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      category: "Languages",
      skills: [ "Java", "HTML","CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Frameworks / Libraries",
      skills: ["React.js","Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools",
      skills: ["Git","GitHub", "Vercel",  "Postman", "Gemini API"],
    },
  ];

  return (
   <div id='skills-section'>
     <Section title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        {skillGroups.map((group) => (
          <div 
            key={group.category} 
            className="flex flex-col h-full border border-zinc-200 bg-white p-6 rounded-2xl hover:border-zinc-400 transition-all duration-300 shadow-sm"
          >
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 mb-5 text-center">
              {group.category}
            </h3>

            <div className="flex flex-col items-center gap-2.5">
              {group.skills.map((skill) => (
                <span 
                  key={skill} 
                 
                  className="flex items-center justify-center w-full max-w-[140px] text-zinc-700 text-[13px] font-medium bg-zinc-50 border border-zinc-200 rounded-full py-2 hover:bg-zinc-100 hover:text-zinc-900 transition-colors cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
   </div>
  );
};

export default SkillsSection;