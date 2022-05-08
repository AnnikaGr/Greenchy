import WelcomePageView from "@/views/welcomePageView";

const WelcomePage = {
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
      <WelcomePageView
        onShowLicense={onShowLicenseACB}
        onHideLicense={onHideLicenseACB}
      />
    );
  },
};

export default WelcomePage;
