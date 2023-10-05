import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex max-w-4xl mx-auto mt-5 mb-3">
            <button className="btn bg-[#D72050] text-white hover:text-black">Latest</button>
            <Marquee pauseOnHover={true}>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;