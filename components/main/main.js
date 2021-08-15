import Image from "next/image";
import Link from "next/link";

function Main({ dataArray }) {
  return (
    <main className="w-full min-h-half flex justify-around items-start flex-wrap">
      {dataArray.map((item) => (
        <div
          key={item.key}
          className="w-4/5 lg:w-2/5 h-auto flex flex-col justify-around items-center p-5 m-10 backdrop-filter backdrop-blur-md bg-purple-200 rounded-lg"
        >
          <Image
            width="750px"
            height="450px"
            className="w-full rounded overflow-hidden cursor-pointer object-cover"
            src={item.image}
            alt="image"
            title={item.name}
          />
          <h2 className="overflow-ellipsis text-left p-2 my-2.5">
            <Link href={`/meetup/${item.key}`}>{item.name}</Link>
          </h2>
          <address className="overflow-ellipsis text-left p-2 ">
            {item.address}
          </address>
          <p className="text-base mt-10 text-purple-700 no-underline hover:underline">
            <Link href={`/meetup/${item.key}`}>Show details</Link>
          </p>
        </div>
      ))}
    </main>
  );
}

export default Main;
