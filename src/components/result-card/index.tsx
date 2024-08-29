import EmptyState from "../empty-state";
import ProfileCard from "../profile-card";
import Loading from "../ui/loading";
import { Iprops } from "./types";

const ResultCard = ({ data, isPending, isSuccess, error }: Iprops) => {
  return (
    <div
      data-testid="result-card"
      className="border min-h-44  max-h-[60%] mt-6 rounded p-3 overflow-y-scroll">
      {isPending && <Loading />}

      {!isPending && !isSuccess ? (
        <EmptyState message="All your search results will appear here!" />
      ) : !isPending && error ? (
        <EmptyState message={error} isError={!!error} />
      ) : (
        !isPending &&
        isSuccess &&
        data &&
        !data?.total_count && (
          <EmptyState message="Nothing was found for your search!" />
        )
      )}

      {!isPending &&
        data &&
        data?.total_count > 0 &&
        data?.items.map((item, index) => (
          <ProfileCard
            key={index}
            name={item.login}
            avatar={item.avatar_url}
            link={item.url}
            type={item.type}
          />
        ))}
    </div>
  );
};

export default ResultCard;
