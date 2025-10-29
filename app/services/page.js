import ServicesHeader from "@/Components/Services/Header";
import ReadyToStart from "@/Components/Services/ReadyToStart";
import RoofingMaterials from "@/Components/Services/RoofingMaterial";
import RoofingServices from "@/Components/Services/RoofingServices";
import RoofingTypes from "@/Components/Services/RoofingTypes";

const { default: Services } = require("@/Components/Services");

const page = () => {
    return (
        <>
            <ServicesHeader />
            <RoofingTypes />
            <RoofingMaterials />
            <RoofingServices />
            <ReadyToStart />   
        </>
    );
}

export default page;