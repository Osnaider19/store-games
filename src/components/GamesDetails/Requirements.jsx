import { useGamesDetails } from "../../hooks/useGamesDetails";


export const Requirements = () => {
  const { data } = useGamesDetails();
  const platforms = data.details.platforms
  return (
    <div className="relative flex justify-start items-center  w-full lg:w-[50%] py-4">
      <div>
        {platforms?.map((plat) => (
          <div key={plat.platform.id}>
            {plat.requirements && (
              <>
                <div className="text-xl pb-2 font-semibold">
                  System requirements for {plat.platform.name}
                </div>
                <div>
                  {plat.requirements.minimum && (
                    <div>
                      <p className="font-semibold text-xl">Minimum:</p>
                      <p> {plat.requirements.minimum}</p>
                    </div>
                  )}
                  {plat.requirements.recommended && (
                    <div>
                      <p className="font-semibold text-xl">Recommended:</p>
                      <p>{plat.requirements.recommended}</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
