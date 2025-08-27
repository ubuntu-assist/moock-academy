import React from 'react';
import { IconBrandLinkedin, IconBrandFacebook, IconMail } from '@tabler/icons-react';

interface SocialLinks {
  linkedin: string;
  facebook: string;
  email: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: SocialLinks;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
  <div className="bg-black p-3 border border-amber-200 rounded-lg">
    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 aspect-square rounded-lg overflow-hidden">
      <img src={member.image} className="w-full h-full object-cover object-top" alt={member.name} />
    </div>

    <div className="text-center mt-4 mb-1">
      <h4 className="text-[15px] font-medium text-amber-400">{member.role}</h4>
      <p className="text-[13px] mt-1.5 text-white font-medium">{member.name}</p>
      
      {/* Social Links */}
      <div className="flex justify-center gap-3 mt-3">
        <a 
          href={member.social.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 transition-colors duration-200 hover:scale-110 transform"
          title="LinkedIn"
        >
          <IconBrandLinkedin size={16} />
        </a>
        <a 
          href={member.social.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 transition-colors duration-200 hover:scale-110 transform"
          title="Facebook"
        >
          <IconBrandFacebook size={16} />
        </a>
        <a 
          href={`mailto:${member.social.email}`}
          className="text-amber-400 hover:text-amber-300 transition-colors duration-200 hover:scale-110 transform"
          title="Email"
        >
          <IconMail size={16} />
        </a>
      </div>
    </div>
  </div>
);

export default function TeamSection(): React.JSX.Element {
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      role: "Software Engineer",
      image: "https://readymadeui.com/team-1.webp",
      social: {
        linkedin: "https://linkedin.com/in/johndoe",
        facebook: "https://facebook.com/johndoe",
        email: "john.doe@company.com"
      }
    },
    {
      name: "Mark Adair",
      role: "Web Developer",
      image: "https://readymadeui.com/team-2.webp",
      social: {
        linkedin: "https://linkedin.com/in/markadair",
        facebook: "https://facebook.com/markadair",
        email: "mark.adair@company.com"
      }
    },
    {
      name: "Simon Konecki",
      role: "Web Designer",
      image: "https://readymadeui.com/team-3.webp",
      social: {
        linkedin: "https://linkedin.com/in/simonkonecki",
        facebook: "https://facebook.com/simonkonecki",
        email: "simon.konecki@company.com"
      }
    },
    {
      name: "Eleanor",
      role: "Web Designer",
      image: "https://readymadeui.com/team-4.webp",
      social: {
        linkedin: "https://linkedin.com/in/eleanor",
        facebook: "https://facebook.com/eleanor",
        email: "eleanor@company.com"
      }
    },
    {
      name: "Alen",
      role: "Software Engineer",
      image: "https://readymadeui.com/team-5.webp",
      social: {
        linkedin: "https://linkedin.com/in/alen",
        facebook: "https://facebook.com/alen",
        email: "alen@company.com"
      }
    },
    {
      name: "Sophia",
      role: "Software Developer",
      image: "https://readymadeui.com/team-6.webp",
      social: {
        linkedin: "https://linkedin.com/in/sophia",
        facebook: "https://facebook.com/sophia",
        email: "sophia@company.com"
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-sm:justify-center mt-12 max-md:max-w-xl max-sm:max-w-xs mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}