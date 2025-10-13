import { TeamMember } from "@constants";
import { FC } from "react";
import Image from "next/image";
import { LinkedinIcon, TwitterIcon } from "@components";

interface Props {
  member: TeamMember;
}

const TeamMemberCard: FC<Props> = (props: Props) => {
  const { member } = props;
  return (
    <div className="flex flex-col rounded-t-3xl overflow-hidden max-w-[400px] gap-2">
      <div className="w-[360px] lg:w-[300px] xl:w-[400px] overflow-hidden group">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={444}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex md:flex-col lg:flex-row w-full justify-between">
        <div className="flex flex-col gap-0">
          <h3>{member.name}</h3>
          <p className="text-grayscale-300">{member.title}</p>
        </div>
        <div className="flex flex-col  gap-2 mt-1">
          <div className="flex gap-3 items-end">
            {member.twitter && (
              <TwitterIcon
                href={member.twitter}
                width={28}
                height={22}
                className="mb-0.5"
              />
            )}
            {member.linkedin && (
              <LinkedinIcon href={member.linkedin} width={28} height={28} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
