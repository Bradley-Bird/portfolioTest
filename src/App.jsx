
import PageSection from "./components/PageSection/PageSection";
import pageData from "./pageData";
import { nanoid } from "nanoid";


export default function App() {
  return (
    <>
  {pageData.map(data =>(
    <PageSection {...data} key={nanoid()}/>
  ))}
    </>
  );
}
