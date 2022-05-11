import AboutUsView from "@/views/aboutUsView";

const AboutUs = {
    render() {
        function onShowLicenseACB() {
          let modal = document.getElementById("license-modal");
          modal.classList.add("is-active");
        }
        function onHideLicenseACB() {
          let modal = document.getElementById("license-modal");
          modal.classList.remove("is-active");
        }
    
        return (
          <AboutUsView
            onShowLicense={onShowLicenseACB}
            onHideLicense={onHideLicenseACB}
          />
        );
      },
};
    
    
export default AboutUs ;
