import animateBike from "../views/animateBike.js";

const WelcomePageView = {
  props: {
    onShowLicense: Function,
    onHideLicense: Function,
  },
  methods: {
    showLicense: function () {
      this.onShowLicense();
    },
    hideLicense: function () {
      this.onHideLicense();
    },
  },
  mounted() {
    animateBike();
  },
  render() {
    return (
      <section class="page-wrapper hero is-fullheight-with-navbar is-vcentered">
        <div class="columns hero-body">
          <div class="column">
            <div class="columns is-centered">
              <h1 class="welcome-text title is-1 has-text-white">
                Welcome to Greenchy
              </h1>
            </div>
            <div class="columns is-centered ">
              <h2 class="welcome-text subtitle is-5 has-text-white">
                Keep track of your travel carbon emissions and stay green!
              </h2>
            </div>

            <div class="planet-minigame column">
              <div class="post">
                <button
                  onClick={this.showLicense}
                  class="post__link button is-ghost is-small"
                  target="_blank"
                >
                  License
                </button>
              </div>

              <div class="planet-wrapper columns is-centered">
                {renderPlanet()}
              </div>

              <div class="columns is-centered">
                <div class="instructions">
                  <p class="is-size-7 has-text-white">Use arrows to move</p>
                  <p class="is-size-7 has-text-white">Hold space for rain</p>
                </div>
              </div>
            </div>
          </div>

          <div class="modal" id="license-modal">
            <div class="modal-background" onClick={this.hideLicense}></div>
            <div class="modal-content">
              <div class="box">
                <p class="is-size-4">Copyright for the World Animation </p>
                <p class="is-size-6">
                  (c) 2022 by Mariusz Dabrowski
                  (https://codepen.io/MarioD/pen/EvMNqE)
                </p>
                <p class="is-size-6">
                  Permission was granted, free of charge, to any person
                  obtaining a copy of the software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions: The above copyright notice and this permission
                  notice shall be included in all copies or substantial portions
                  of the Software.
                </p>

                <p class="is-size-6">
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
            </div>
            <button
              class="modal-close is-large"
              aria-label="close"
              onClick={this.hideLicense}
            ></button>
          </div>
        </div>
      </section>
    );

    function renderPlanet() {
      return (
        <div class="planet">
          <svg
            class="rotating-fog"
            x="0px"
            y="0px"
            viewBox="0 0 295 268.5"
            style="enable-background:new 0 0 295 268.5;"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M295,160.5c0-19.2-10.4-36-26-45c-3.1-15.9-13.5-29.3-27.6-36.4c1-4,1.5-8.2,1.5-12.6c0-28.7-23.3-52-52-52 c-5.7,0-11.3,0.9-16.4,2.6C165.1,6.6,151.3,0,136,0c-19,0-35.7,10.2-44.8,25.5c-9-7.5-20.6-12-33.2-12c-28.7,0-52,23.3-52,52 c0,10.1,2.9,19.6,7.9,27.6C5.3,102.4,0,114.8,0,128.5c0,13.9,5.4,26.5,14.3,35.8C9,172.4,6,182.1,6,192.5c0,28.7,23.3,52,52,52 c2.1,0,4.2-0.1,6.2-0.4c8.4,5.9,18.7,9.4,29.8,9.4c3.9,0,7.6-0.4,11.3-1.2c9.5,10,22.9,16.2,37.7,16.2c13.7,0,26.1-5.3,35.4-13.9 c8.6,6.2,19.2,9.9,30.6,9.9c28.7,0,52-23.3,52-52c0-1.1,0-2.1-0.1-3.2C280.8,202,295,182.9,295,160.5z"
            />
          </svg>

          <div class="path-wrapper">
            <svg
              class="grass-1"
              x="0px"
              y="0px"
              viewBox="0 0 57.8 29"
              style="enable-background:new 0 0 57.8 29;"
              xml:space="preserve"
            >
              <path d="M57.8,0c0,0-25,10.5-25,29H21C21,10.5,0,5,0,5c16.8,0,21.7,6.4,26.9,14.1C32.2,11.4,41,0,57.8,0z" />
            </svg>

            <svg
              class="grass-2"
              x="0px"
              y="0px"
              viewBox="0 0 57.8 29"
              style="enable-background:new 0 0 57.8 29;"
              xml:space="preserve"
            >
              <path d="M57.8,0c0,0-25,10.5-25,29H21C21,10.5,0,5,0,5c16.8,0,21.7,6.4,26.9,14.1C32.2,11.4,41,0,57.8,0z" />
            </svg>

            <svg
              class="grass-3"
              x="0px"
              y="0px"
              viewBox="0 0 57.8 29"
              style="enable-background:new 0 0 57.8 29;"
              xml:space="preserve"
            >
              <path d="M57.8,0c0,0-25,10.5-25,29H21C21,10.5,0,5,0,5c16.8,0,21.7,6.4,26.9,14.1C32.2,11.4,41,0,57.8,0z" />
            </svg>

            <svg
              class="tree-01"
              x="0px"
              y="0px"
              viewBox="0 0 266.7 346.7"
              style="enable-background:new 0 0 266.7 346.7;"
              xml:space="preserve"
            >
              <path d="M238.7,346.7l-17.3-77.3c9.3,11.3,45.3,20,45.3,20C240,272,204,206,204,206c8,5.3,31.3,6,31.3,6 c-27.3-14-56.7-79.3-56.7-79.3c6.7,4.7,20,2.7,20,2.7c-24-12.7-47.3-72.7-47.3-72.7c11.3,8,20.7,6.7,20.7,6.7 C148.7,51.3,133.3,0,133.3,0c0,0-15.3,51.3-38.7,69.3c0,0,9.3,1.3,20.7-6.7c0,0-23.3,60-47.3,72.7c0,0,13.3,2,20-2.7    c0,0-29.3,65.3-56.7,79.3c0,0,23.3-0.7,31.3-6c0,0-36,66-62.7,83.3c0,0,36-8.7,45.3-20L28,346.7H238.7z" />
            </svg>

            <svg
              class="tree-02"
              x="0px"
              y="0px"
              viewBox="0 0 266.7 346.7"
              style="enable-background:new 0 0 266.7 346.7;"
              xml:space="preserve"
            >
              <path d="M238.7,346.7l-17.3-77.3c9.3,11.3,45.3,20,45.3,20C240,272,204,206,204,206c8,5.3,31.3,6,31.3,6 c-27.3-14-56.7-79.3-56.7-79.3c6.7,4.7,20,2.7,20,2.7c-24-12.7-47.3-72.7-47.3-72.7c11.3,8,20.7,6.7,20.7,6.7 C148.7,51.3,133.3,0,133.3,0c0,0-15.3,51.3-38.7,69.3c0,0,9.3,1.3,20.7-6.7c0,0-23.3,60-47.3,72.7c0,0,13.3,2,20-2.7 c0,0-29.3,65.3-56.7,79.3c0,0,23.3-0.7,31.3-6c0,0-36,66-62.7,83.3c0,0,36-8.7,45.3-20L28,346.7H238.7z" />
            </svg>

            <svg
              class="tree-03"
              x="0px"
              y="0px"
              viewBox="0 0 266.7 346.7"
              style="enable-background:new 0 0 266.7 346.7;"
              xml:space="preserve"
            >
              <path d="M238.7,346.7l-17.3-77.3c9.3,11.3,45.3,20,45.3,20C240,272,204,206,204,206c8,5.3,31.3,6,31.3,6 c-27.3-14-56.7-79.3-56.7-79.3c6.7,4.7,20,2.7,20,2.7c-24-12.7-47.3-72.7-47.3-72.7c11.3,8,20.7,6.7,20.7,6.7 C148.7,51.3,133.3,0,133.3,0c0,0-15.3,51.3-38.7,69.3c0,0,9.3,1.3,20.7-6.7c0,0-23.3,60-47.3,72.7c0,0,13.3,2,20-2.7 c0,0-29.3,65.3-56.7,79.3c0,0,23.3-0.7,31.3-6c0,0-36,66-62.7,83.3c0,0,36-8.7,45.3-20L28,346.7H238.7z" />
            </svg>

            <svg
              class="tree-04"
              x="0px"
              y="0px"
              viewBox="0 0 266.7 346.7"
              style="enable-background:new 0 0 266.7 346.7;"
              xml:space="preserve"
            >
              <path d="M238.7,346.7l-17.3-77.3c9.3,11.3,45.3,20,45.3,20C240,272,204,206,204,206c8,5.3,31.3,6,31.3,6 c-27.3-14-56.7-79.3-56.7-79.3c6.7,4.7,20,2.7,20,2.7c-24-12.7-47.3-72.7-47.3-72.7c11.3,8,20.7,6.7,20.7,6.7 C148.7,51.3,133.3,0,133.3,0c0,0-15.3,51.3-38.7,69.3c0,0,9.3,1.3,20.7-6.7c0,0-23.3,60-47.3,72.7c0,0,13.3,2,20-2.7 c0,0-29.3,65.3-56.7,79.3c0,0,23.3-0.7,31.3-6c0,0-36,66-62.7,83.3c0,0,36-8.7,45.3-20L28,346.7H238.7z" />
            </svg>

            <svg
              class="tree-05"
              x="0px"
              y="0px"
              viewBox="0 0 266.7 346.7"
              style="enable-background:new 0 0 266.7 346.7;"
              xml:space="preserve"
            >
              <path d="M238.7,346.7l-17.3-77.3c9.3,11.3,45.3,20,45.3,20C240,272,204,206,204,206c8,5.3,31.3,6,31.3,6 c-27.3-14-56.7-79.3-56.7-79.3c6.7,4.7,20,2.7,20,2.7c-24-12.7-47.3-72.7-47.3-72.7c11.3,8,20.7,6.7,20.7,6.7 C148.7,51.3,133.3,0,133.3,0c0,0-15.3,51.3-38.7,69.3c0,0,9.3,1.3,20.7-6.7c0,0-23.3,60-47.3,72.7c0,0,13.3,2,20-2.7 c0,0-29.3,65.3-56.7,79.3c0,0,23.3-0.7,31.3-6c0,0-36,66-62.7,83.3c0,0,36-8.7,45.3-20L28,346.7H238.7z" />
            </svg>

            <svg
              class="mountain-1"
              x="0px"
              y="0px"
              viewBox="0 0 184 184"
              style="enable-background:new 0 0 184 184;"
              xml:space="preserve"
            >
              <path d="M169.9,184H14.1C6.4,184,0,177.6,0,169.9V14.1C0,6.4,6.4,0,14.1,0h155.7c7.8,0,14.1,6.4,14.1,14.1v155.7 C184,177.6,177.6,184,169.9,184z" />
            </svg>

            <svg
              class="mountain-2"
              x="0px"
              y="0px"
              viewBox="0 0 184 184"
              style="enable-background:new 0 0 184 184;"
              xml:space="preserve"
            >
              <path d="M169.9,184H14.1C6.4,184,0,177.6,0,169.9V14.1C0,6.4,6.4,0,14.1,0h155.7c7.8,0,14.1,6.4,14.1,14.1v155.7 C184,177.6,177.6,184,169.9,184z" />
            </svg>

            <svg
              class="mountain-4"
              x="0px"
              y="0px"
              viewBox="0 0 184 184"
              style="enable-background:new 0 0 184 184;"
              xml:space="preserve"
            >
              <path d="M169.9,184H14.1C6.4,184,0,177.6,0,169.9V14.1C0,6.4,6.4,0,14.1,0h155.7c7.8,0,14.1,6.4,14.1,14.1v155.7 C184,177.6,177.6,184,169.9,184z" />
            </svg>

            <svg
              class="mountain-5"
              x="0px"
              y="0px"
              viewBox="0 0 184 184"
              style="enable-background:new 0 0 184 184;"
              xml:space="preserve"
            >
              <path d="M169.9,184H14.1C6.4,184,0,177.6,0,169.9V14.1C0,6.4,6.4,0,14.1,0h155.7c7.8,0,14.1,6.4,14.1,14.1v155.7 C184,177.6,177.6,184,169.9,184z" />
            </svg>

            <svg
              class="rock-1"
              x="0px"
              y="0px"
              viewBox="0 0 221 126"
              style="enable-background:new 0 0 221 126;"
              xml:space="preserve"
            >
              <path d="M221.2,71.5c0-23.8-19.2-43-43-43c-10.1,0-19.4,3.5-26.8,9.3c-12.3-22.1-40-37.5-72.2-37.5c-43.6,0-79,28.2-79,63l-0.3,62.3 h220.7L221.2,71.5z" />
            </svg>

            <svg
              class="rock-2"
              x="0px"
              y="0px"
              viewBox="0 0 221 126"
              style="enable-background:new 0 0 221 126;"
              xml:space="preserve"
            >
              <path d="M221.2,71.5c0-23.8-19.2-43-43-43c-10.1,0-19.4,3.5-26.8,9.3c-12.3-22.1-40-37.5-72.2-37.5c-43.6,0-79,28.2-79,63l-0.3,62.3 h220.7L221.2,71.5z" />
            </svg>

            <div class="bike">
              <div id="bm">
                <div class="light"></div>
                <div class="umbrella-animation"></div>
                <div class="bike__marker"></div>
              </div>
            </div>
            <svg
              width="242.7"
              height="244.2"
              x="0px"
              y="0px"
              viewBox="0 0 242.7 244.2"
              style="enable-background:new 0 0 242.7 244.2;"
              xml:space="preserve"
            >
              <path
                class="outline"
                d="M3.3,120.6c0-20.4-4.5-39.8,3.6-57.2c11.9-25.6,30.5-29.8,54.9-43.7C81.6,8.3,94.5,1.9,119,1.9 c20.6,0,43,7.6,60.5,15.7c20.6,9.6,38.3,14.3,51.7,32.3c16.7,22.6,6.6,40.5,6.6,70.7c0,18.7,3.2,35.6-3.7,51.8 c-9.6,22.7-12.2,23.2-31.8,37.6c-22.5,16.5-48.3,32.3-78.3,32.3c-22,0-44.8-11.2-63.1-20.5C34.6,208.6,20.2,208,7.2,181.6 C-1.7,163.5,3.3,142.2,3.3,120.6z"
              />
            </svg>

            <div class="cloud-boundary">
              <div class="rain">
                <div class="rain__drops-top"></div>
                <div class="rain__drops-bottom"></div>
              </div>
              <div class="cloud-boundary__marker"></div>
              <div class="cloud">
                <svg
                  class="cloud-svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 609.5 310"
                  style="enable-background:new 0 0 609.5 310;"
                  xml:space="preserve"
                >
                  <path d="M549.5,201c0,0-13-90-105-77c0,0-3-115-118-115c-94,0-116,84-116,84S87.7,68.4,81.1,203.2 c0,0-62.9-20.8-71.6,45.8c-7,53.5,68,52,68,52l482-5c0,0,41-1.7,41-45.5C600.5,218,577.8,201,549.5,201z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      );
    }
  },
};

export default WelcomePageView;
