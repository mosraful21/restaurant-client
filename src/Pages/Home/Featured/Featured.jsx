import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white my-10">
      <div className=" bg-slate-600 bg-opacity-60 p-2">
        <SectionTitle
          subHeading="Check it out"
          heading="Featured Item"
        ></SectionTitle>

        <div className="md:flex justify-center items-center md:py-20 md:px-36 py-3 px-5">
          <div>
            <img src={featured} alt="" />
          </div>
          <div className="md:ml-10 space-y-2">
            <p>August 12, 2023</p>
            <p className="uppercase">where can i get some?</p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              quos, aliquid animi est at id sapiente! Delectus culpa, similique
              id dolor eaque vitae atque quibusdam eius quis illo, mollitia
              perferendis aut. Necessitatibus provident magni mollitia dolore,
              perferendis doloribu incidunt perspiciatis laborum consectetur ad
              atque praesentium tempore quisquam beatae non dicta!
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
