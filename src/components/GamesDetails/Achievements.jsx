import { useFetch } from "../../hooks/useFech";
import { API_KEY, URL } from "../../config/config";
import { useParams } from "react-router-dom";
export const Achievements = () => {
  const { id } = useParams();
  const { data } = useFetch(`${URL}/games/${id}/achievements?key=${API_KEY}`);
  return (
    <>
      {data?.results?.length >  0  && (
        <div className="relative w-full  bg-[#181818] py-4">
          {/* {console.log(data)} */}
          <div>
            <h3 className="text-3xl  font-semibold capitalize py-4">
              Achivements
            </h3>
            <ul className="flex flex-wrap w-full  justify-between gap-3">
              {data?.results?.map((achievement) => (
                <li
                  key={achievement.id}
                  className="flex  max-w-[400px] w-full "
                >
                  <div className="flex gap-2 justify-center items-start ">
                    <div className="min-w-[60px] w-full  min-h-[60px] max-w-[60px] max-h-[60px] h-full overflow-hidden rounded-lg flex items-center">
                      <img
                        src={achievement.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <strong className="leading-none">
                        {achievement.name}
                      </strong>
                      <p className="text-sm line-clamp-2">
                        {achievement.description}
                      </p>
                      <p className="text-sm">{achievement.percent}%</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
