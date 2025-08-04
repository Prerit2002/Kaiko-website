import HoverCard from "./HoverCard";
import DugguFront from "../assets/HoverImages/Duggu/Duggufront.png";
import Duggu1 from "../assets/HoverImages/Duggu/Duggu1.png";
import Duggu2 from "../assets/HoverImages/Duggu/Duggu2.png";
import Duggu3 from "../assets/HoverImages/Duggu/Duggu3.png";
import DukkaanFront from "../assets/HoverImages/Dukkaan/Dukaanfront.png";
import Dukkaan1 from "../assets/HoverImages/Dukkaan/Dukaan1.png";
import Dukkaan2 from "../assets/HoverImages/Dukkaan/Dukaan2.png";
import Dukkaan3 from "../assets/HoverImages/Dukkaan/Dukaan3.png";
import ClenziFront from "../assets/HoverImages/Clenzi/Clenzifront.png";
import Clenzi1 from "../assets/HoverImages/Clenzi/Clenzi1.png";
import Clenzi2 from "../assets/HoverImages/Clenzi/Clenzi2.png";
import Clenzi3 from "../assets/HoverImages/Clenzi/Clenzi3.png";
import BartenderFront from "../assets/HoverImages/Bartender/BartenderFront.png";
import Bartender1 from "../assets/HoverImages/Bartender/Bartender1.png";
import Bartender2 from "../assets/HoverImages/Bartender/Bartender2.png";
import Bartender3 from "../assets/HoverImages/Bartender/Bartender3.png";
import ClodorFront from "../assets/HoverImages/Clodor/Clodorfront.png";
import Clodor1 from "../assets/HoverImages/Clodor/Clodor1.png";
import Clodor2 from "../assets/HoverImages/Clodor/Clodor2.png";
import Clodor3 from "../assets/HoverImages/Clodor/Clodor3.png";
import ClodorLogo from "../assets/ClodorMobile.png"
import BartenderLogo from "../assets/Duggu/beer.png";
import DukkaanLogo from "../assets/Clodor/Frame404.svg";
import DugguLogo from "../assets/Clenzi/Vector.png";
import ClenziLogo from "../assets/ClenziMobile.png"

export default function ShowcaseSection() {
  return (
    <section id="work" className="w-full">
      <div className="bg-yellow-400  rounded-full py-2 text-center mx-auto text-black font-normal text-md md:text-xl font-clash">
        BEHOLD
      </div>
       <HoverCard
        title="DUKAAN"
        subtitle="PRODUCT DESIGN & BRANDING"
        bgColor="#F9D8C9"
        cardImages={[
          DukkaanFront,
          Dukkaan1,
          Dukkaan2,
          Dukkaan3,
        ]}
        redirectUrl="/dukaan"
        imgLogo={DukkaanLogo}
        txtColor="#000000"
      />
      <HoverCard
        title="CLODOR"
        subtitle="WEB DESIGN"
        bgColor="#000000"
        cardImages={[
          ClodorFront,
          Clodor1,
          Clodor2,
          Clodor3,
        ]}
        redirectUrl="/clodor"
        imgLogo={ClodorLogo}
        txtColor="#FFFFFF"
      />
      <HoverCard
        title="DUGGU"
        subtitle="PRODUCT DESIGN & BRANDING"
        bgColor="#611AA1"
        cardImages={[
          DugguFront,
          Duggu1,
          Duggu2,
          Duggu3,
        ]}
        redirectUrl="/duggu"
        imgLogo={DugguLogo}
        txtColor="#FFFFFF"
      />
      <HoverCard
        title="CLENZI"
        subtitle="PACKAGING"
        bgColor="#EF4293"
        cardImages={[
          ClenziFront,
          Clenzi1,
          Clenzi2,
          Clenzi3,
        ]}
        redirectUrl="/clenzi"
        imgLogo={ClenziLogo}
        txtColor="#FFFFFF"
      />
      <HoverCard
        title="THE BARTENDER"
        subtitle="PRINT"
        bgColor="#B7AA9F"
        cardImages={[
          BartenderFront,
          Bartender1,
          Bartender2,
          Bartender3,
        ]}
        redirectUrl="/bartender"
        imgLogo={BartenderLogo}
        txtColor="#FFFFFF"
      />
      <HoverCard
        title="TOPSERVE"
        subtitle="To Be Released"
        bgColor="#EC4899"
        comingSoon={true}
      />
    </section>
  );
}
