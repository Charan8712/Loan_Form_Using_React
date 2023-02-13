import './App.css';
import LoanAmount from './component/LoanAmount';
import LoanTenure from './component/LoanTenure';
import LoanPurpose from './component/LoanPurpose';
import Next1 from "./component/Next1";
import NameForm from "./component/NameForm";
import Gender from "./component/Gender";
import Dob from "./component/Dob";
import Email from "./component/Email";
import Mobile from "./component/Mobile";
import Relationship from "./component/Relationship";
import Dependents from "./component/Dependents";
import Next2 from "./component/NextButton";
import MainBtn from "./component/MainBtn";
// import Nxt2 from "./component/Nxt2";
import PostCode from "./component/PostCode";
import Address from "./component/Address";
import Res from "./component/Res";
import Income from "./component/Income";
import Pay from "./component/Pay";
import EmpSt from "./component/EmpSt";
import Occ from "./component/Occ";
import Bank from "./component/Bank";
import ShortCode from "./component/ShortCode";
import UpdateBtn from "./component/UpdateBtn";


function App() {
  return (
    <>
    <div style={{backgroundImage:`url("https://c4.wallpaperflare.com/wallpaper/951/260/911/design-wallpaper-preview.jpg")`,backgroundSize:"cover", backgroundRepeat:"no-repeat", width: "100%", position: "absolute", top:"0", left:"0", textAlign:"center",fontWeight:"bold" , borderRadius:"50px", margin:"Auto"}}>
    {/* <LoanAmount />
    <LoanTenure />
    <LoanPurpose />  */}
    
    <h1 style={{textAlign: "center"}}>Loan Details</h1>
    <div style={{textAlign: "center"}}> <Next1 /></div>

    <h1>Personal Details</h1>
    {/* <NameForm />
    <Gender />
    <Dob />
    <Email />
    <Mobile />
    <Relationship />
    <Dependents /> */}
    <MainBtn />
    {/* <Next2 /> */}
    {/* <Nxt2 />  */}
    <h1>Residential Detaills</h1>
    <p>(Current Address)</p>
    <PostCode />
    <Address/>
    <Res/>
    <h1>Financial Details</h1>
    <Income/>
    <Pay/>
    <EmpSt/>
    <Occ />
    <Bank />
    <ShortCode/>
    <UpdateBtn />
    </div>
    </>
  );
}

export default App;
