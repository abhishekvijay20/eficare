import Header from "../components/Header";
import EmployerForm from "../components/EmployerForm";
import Copyright from "../components/Copyright";
import '../../src/global.css';

const Employer = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start text-justify text-xl text-black font-outfit">
      <Header />
      <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row py-[53px] px-[50px] 
      items-center 
      justify-center 
      gap-[98px] 
      text-left 
       
      text-black 
      font-averia-libre 
      md:flex-col sm:p-[35px] 
      sm:box-border
      ">
        <div className="items-center flex-1 flex flex-col items-start justify-start gap-[53px] md:items-center md:justify-center md:flex-[unset] md:self-stretch
        ">
          <EmployerForm />
        </div>

        <div className="w-[538px] flex flex-row items-center justify-center">
          <img
            className="relative w-[518.56px] h-[518.98px] lg:w-[478px] lg:h-[478px] md:w-[380px] md:h-[380px] sm:w-[300px] sm:h-[300px]"
            alt=""
            src="/illustration1.svg"
          />
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Employer;
