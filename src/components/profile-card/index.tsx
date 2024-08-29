import { ProfileCardProps } from "./types";

const ProfileCard = ({ avatar, name, link, type }: ProfileCardProps) => {
  return (
    <section
      data-testid="profile-card"
      className="mb-2 border p-4 rounded-lg max-w-full bg-neutral-100">
      <div className="mx-auto">
        <div className="card md:flex max-w-lg">
          <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
            <img
              src={avatar ?? "https://via.placeholder.com/150"}
              alt="avatar"
              className="object-cover rounded-full border border-green-400"
            />
          </div>
          <div className="flex-grow flex flex-col text-center md:text-left">
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm mb-3">{link}</p>

            <div className="!mt-auto">
              <span className="bg-gray-200 border px-3 py-1 rounded-lg text-sm">
                {type}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
