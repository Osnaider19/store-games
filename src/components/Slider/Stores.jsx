import React from "react";

export const Stores = ({ stores }) => {
  return (
    <div className="relative">
      <h2 className="text-xl font-semibold py-3 ">Tiendas</h2>
      {console.log(stores)}
      <div className="relative flex">
        {stores?.map(({ store }) => (
          <a key={store.id} href={`https://${store.domain}`} target="_blank">
            <div className="relative left-0 top-0 w-full h-full max-h-[250px] max-w-[200px] overflow-hidden">
              <img src={store.image_background} alt="" className="w-full h-full" />
              <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center bg-[#20202080] transition-colors duration-300 hover:bg-transparent">
                <p className="text-xl font-bold">{store.name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
