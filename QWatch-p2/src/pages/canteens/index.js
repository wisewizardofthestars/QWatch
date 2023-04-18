import UniversityList from '../../components/UniversityList';
import Link from 'next/link';
import load_uni_names from '../../database_test/load_uni_names';



export async function getStaticProps() {
  const data = await load_uni_names();
  return {
    props: {
      universities: data,
    },
  }
};


function CanteensPage(props) {
  return (
    <div className="bg-gray-100">

      <main>
        <UniversityList universities={props.universities}/>
      </main>

    </div>
  );
}

export default CanteensPage;
