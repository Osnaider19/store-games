import { useGamesDetails } from "../../hooks/useGamesDetails";
export const ShoppingStore = () => {
  const { data } = useGamesDetails();
  const stores = data?.store?.results;
  const extractDomainName = (url) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    const hostname = anchor.hostname;
    return hostname.split(".")[1];
  };
  return (
    <article>
      <h4 className="text-xl py-1 font-semibold">Where to buy</h4>
      <div className="flex gap-2 py-2 flex-wrap">
        {stores?.map((store) => (
          <a href={store.url} key={store.id} target="_blank">
            <div className="capitalize py-2 px-3 bg-[#44444480] rounded-md hover:bg-[#444444e6] transition-colors duration-200">
              {extractDomainName(store.url)}
            </div>
          </a>
        ))}
      </div>
    </article>
  );
};
