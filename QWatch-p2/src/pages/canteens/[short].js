import canteens_by_university from "../../database_test/canteens_by_university";
import get_uni_info from "../../database_test/get_uni_info";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Canteen from "../../components/canteen";




export async function getServerSideProps(context) {
    const short = context.query.short;
    const data = await canteens_by_university(short);
    const uni = await get_uni_info(short);
    return {
        props: {
            canteens: data,
            uni_info: uni,
        },
    }
};



export default function shortCanteen(props) {
    const uni_info = props.uni_info;
    const canteens = props.canteens;
    const sep_name = uni_info.name.split(" ")
    const loc_name = sep_name[sep_name.length - 1];


    return (
        <div className="bg-gray-100">

            <section className="bg-indigo-500 py-20 px-6 text-center text-white">
                <img src={uni_info.imageURL} className="mx-auto m-4 h-40 object-cover mb-4 rounded-lg" />
                <h1 className="text-4xl mb-4">You are at </h1>
                <h1 className="text-4xl font-bold mb-4">{uni_info.shortName + " - " + uni_info.name}</h1>
                <p className="text-lg mb-8">{loc_name}</p>
                <Link href="/canteens" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Change</Link>
            </section>


            {/* Main content */}
            {/* Features section */}


            {canteens.map((canteen) => (
                <Canteen canteen={canteen} university={uni_info.shortName}/>
            ))}



        </div>
    );
}
