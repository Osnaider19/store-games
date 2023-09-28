import { Link } from "react-router-dom";
import { useGamesDetails } from "../../hooks/useGamesDetails";

export const Tags = () => {
  const { data } = useGamesDetails();
  const tags = data?.details.tags
  return (
    <div>
      <h4 className="text-lg opacity-70 font-semibold  py-2">Tags</h4>
      <div className="flex gap-3 flex-wrap  ">
        {tags?.map((tag) => (
          <Link
            to={`/tags/${tag.slug}`}
            className="hover:opacity-70 hover:underline"
            key={tag.id}
          >
            <span>{tag.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
