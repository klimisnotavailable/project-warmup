import SocialsList from "../SocialsList/SocialsList";

const HeroSection = () => {
  return (
    <section className=" flex justify-around items-center p-10">
      <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-white text-4xl mb-4">I'M</p>
        <h1 className="text-white text-6xl mb-6">Abdullahi Umar</h1>
        <p className="text-slate-300 text-1xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          perferendis ratione perspiciatis deleniti tenetur ipsam maiores eaque
          temporibus corrupti voluptas?
        </p>
        <hr />
      </div>
      <div>
        <img
          className="rounded-full w-full border-solid border-8 border-white"
          width={250}
          height={250}
          src="./developer_picture.jpg"
          alt=""
        />
      </div>
      <div className="w-1/3">
        <h3 className="text-white text-4xl mb-4">About me</h3>
        <p className="text-slate-300 text-1xl mb-6">
         Let's build quality in programming ad design with our services
        </p>
        <button className="bg-white text-indigo-600 px-10 py-2 rounded-full hover:bg-indigo-800 hover:text-white mb-5">Show more...</button>
        <SocialsList></SocialsList>
      </div>
    </section>
  );
};

export default HeroSection;
