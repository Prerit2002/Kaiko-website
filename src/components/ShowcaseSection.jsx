import HoverCard from "./HoverCard";
import Duggu1 from "../assets/HoverImages/Duggu/1.png";
import Duggu2 from "../assets/HoverImages/Duggu/2.png";
import Duggu3 from "../assets/HoverImages/Duggu/3.png";
import Duggu4 from "../assets/HoverImages/Duggu/4.png";
import Dukkaan1 from "../assets/HoverImages/Dukkaan/1.png";
import Dukkaan2 from "../assets/HoverImages/Dukkaan/2.png";
import Dukkaan3 from "../assets/HoverImages/Dukkaan/3.png";
import Dukkaan4 from "../assets/HoverImages/Dukkaan/4.png";
import Clenzi1 from "../assets/HoverImages/Clenzi/1.png";
import Clenzi2 from "../assets/HoverImages/Clenzi/2.png";
import Clenzi3 from "../assets/HoverImages/Clenzi/3.png";
import Clenzi4 from "../assets/HoverImages/Clenzi/4.png";
import Bartender1 from "../assets/HoverImages/Bartender/1.png";
import Bartender2 from "../assets/HoverImages/Bartender/2.png";
import Bartender3 from "../assets/HoverImages/Bartender/3.png";
import Bartender4 from "../assets/HoverImages/Bartender/4.png";
import Clodor1 from "../assets/HoverImages/Clodor/1.png";
import Clodor2 from "../assets/HoverImages/Clodor/2.png";
import Clodor3 from "../assets/HoverImages/Clodor/3.png";
import Clodor4 from "../assets/HoverImages/Clodor/4.png";

export default function ShowcaseSection() {
  return (
    <section id="work" className="w-full">
      <div className="bg-yellow-400  rounded-full py-3 text-center mx-auto text-black font-bold text-md md:text-xl font-clash">
        BEHOLD
      </div>
      <HoverCard
        title="DUGGU"
        subtitle="PRODUCT DESIGN & BRANDING"
        bgColor="#661EFF"
        cardImages={[
          Duggu1,
          Duggu2,
          Duggu3,
          Duggu4,
        ]}
        redirectUrl="/duggu"
      />
      <HoverCard
        title="DUKAAN"
        subtitle="PRODUCT DESIGN & BRANDING"
        bgColor="#F9D8C9"
        cardImages={[
          Dukkaan1,
          Dukkaan2,
          Dukkaan3,
          Dukkaan4,
        ]}
        redirectUrl="/dukaan"
      />
      <HoverCard
        title="CLENZI"
        subtitle="PACKAGING"
        bgColor="#EC4899"
        cardImages={[
          Clenzi1,
          Clenzi2,
          Clenzi3,
          Clenzi4,
        ]}
        redirectUrl="/clenzi"
      />
      <HoverCard
        title="THE BARTENDER"
        subtitle="PRINT"
        bgColor="#B7AA9F"
        cardImages={[
          Bartender1,
          Bartender2,
          Bartender3,
          Bartender4,
        ]}
        redirectUrl="/bartender"
      />
      <HoverCard
        title="CLENZI"
        subtitle="PACKAGING"
        bgColor="#EC4899"
        comingSoon={true}
      />
    </section>
  );
}
