import Navbar from "./Navbar";

export default function Marketplace() {

return (
    <div>
        <Navbar></Navbar>
        <div className="flex flex-col place-items-center mt-20">
            <div className="md:text-xl font-bold text-white">
                Top NFTs
            </div>
        </div>            
    </div>
);

}