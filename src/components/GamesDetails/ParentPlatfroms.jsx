import { platfromsIcon } from "../../helpers/platfroms";
import { useGamesDetails } from "../../hooks/useGamesDetails";
export const ParentPlatfroms = () => {
  const { data } = useGamesDetails();
  const parentPlatforms = data.details.parent_platforms;
  return (
    <div className="flex gap-3 py-4">
      {parentPlatforms?.map(({ platform }) => (
        <div key={platform.id}>
          <i className="text-2xl">{platfromsIcon(platform.slug)}</i>
        </div>
      ))}
    </div>
  );
};
