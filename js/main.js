// =====================================
// SELIMA PORTFOLIO — MAIN.JS
// =====================================


// =====================================
// 01 — SCROLL REVEAL
// =====================================

const revealElements = document.querySelectorAll(
    ".case, .journey-row, .other-row, .skill-board article, .lang-list > div"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// =====================================
// 02 — GENERIC MODAL FUNCTIONS
// =====================================

function openModal(modal, video = null) {

    if (!modal) return;

    modal.classList.add("open");

    document.body.style.overflow = "hidden";

    if (video) {
        video.currentTime = 0;

        video.play().catch(() => {
            // Autoplay can be blocked by the browser.
        });
    }
}


function closeModal(modal, video = null) {

    if (!modal) return;

    modal.classList.remove("open");

    document.body.style.overflow = "";

    if (video) {
        video.pause();
    }
}


// =====================================
// 03 — ARTEMIA
// FULL PROJECT DEMO
// =====================================

const artemiaModal =
    document.getElementById("artemiaModal");

const openArtemiaDemo =
    document.getElementById("openArtemiaDemo");

const closeArtemiaDemo =
    document.getElementById("closeArtemiaDemo");

const artemiaFullVideo =
    document.getElementById("artemiaFullVideo");


if (openArtemiaDemo && artemiaModal) {

    openArtemiaDemo.addEventListener("click", () => {

        openModal(
            artemiaModal,
            artemiaFullVideo
        );

    });

}


if (closeArtemiaDemo && artemiaModal) {

    closeArtemiaDemo.addEventListener("click", () => {

        closeModal(
            artemiaModal,
            artemiaFullVideo
        );

    });

}


if (artemiaModal) {

    artemiaModal.addEventListener("click", (event) => {

        if (event.target === artemiaModal) {

            closeModal(
                artemiaModal,
                artemiaFullVideo
            );

        }

    });

}


// =====================================
// 04 — ARTEMIA
// MY CLIENT MANAGEMENT VIDEO
// =====================================

const artemiaWorkModal =
    document.getElementById("artemiaWorkModal");

const openArtemiaWork =
    document.getElementById("openArtemiaWork");

const closeArtemiaWork =
    document.getElementById("closeArtemiaWork");

const artemiaWorkVideo =
    document.getElementById("artemiaWorkVideo");


if (openArtemiaWork && artemiaWorkModal) {

    openArtemiaWork.addEventListener("click", () => {

        openModal(
            artemiaWorkModal,
            artemiaWorkVideo
        );

    });

}


if (closeArtemiaWork && artemiaWorkModal) {

    closeArtemiaWork.addEventListener("click", () => {

        closeModal(
            artemiaWorkModal,
            artemiaWorkVideo
        );

    });

}


if (artemiaWorkModal) {

    artemiaWorkModal.addEventListener("click", (event) => {

        if (event.target === artemiaWorkModal) {

            closeModal(
                artemiaWorkModal,
                artemiaWorkVideo
            );

        }

    });

}


// =====================================
// 04b — SIDEKICK
// DEMO VIDEO
// =====================================

const sidekickModal =
    document.getElementById("sidekickModal");

const openSidekickDemo =
    document.getElementById("openSidekickDemo");

const closeSidekickDemo =
    document.getElementById("closeSidekickDemo");

const sidekickFullVideo =
    document.getElementById("sidekickFullVideo");


if (openSidekickDemo && sidekickModal) {

    openSidekickDemo.addEventListener("click", () => {

        openModal(
            sidekickModal,
            sidekickFullVideo
        );

    });

}


if (closeSidekickDemo && sidekickModal) {

    closeSidekickDemo.addEventListener("click", () => {

        closeModal(
            sidekickModal,
            sidekickFullVideo
        );

    });

}


if (sidekickModal) {

    sidekickModal.addEventListener("click", (event) => {

        if (event.target === sidekickModal) {

            closeModal(
                sidekickModal,
                sidekickFullVideo
            );

        }

    });

}


// =====================================
// 05 — ARTEMIA
// FINGERPRINT DEMO
// =====================================

const fingerprintModal =
    document.getElementById("fingerprintModal");

const openFingerprintDemo =
    document.getElementById("openFingerprintDemo");

const closeFingerprintDemo =
    document.getElementById("closeFingerprintDemo");

const fingerprintVideo =
    document.getElementById("fingerprintVideo");


if (openFingerprintDemo && fingerprintModal) {

    openFingerprintDemo.addEventListener("click", () => {

        openModal(
            fingerprintModal,
            fingerprintVideo
        );

    });

}


if (closeFingerprintDemo && fingerprintModal) {

    closeFingerprintDemo.addEventListener("click", () => {

        closeModal(
            fingerprintModal,
            fingerprintVideo
        );

    });

}


if (fingerprintModal) {

    fingerprintModal.addEventListener("click", (event) => {

        if (event.target === fingerprintModal) {

            closeModal(
                fingerprintModal,
                fingerprintVideo
            );

        }

    });

}


// =====================================
// 06 — PULSA
// TEASER VIDEO
// =====================================

const pulsaTeaserModal =
    document.getElementById("pulsaTeaserModal");

const openPulsaTeaser =
    document.getElementById("openPulsaTeaser");

const closePulsaTeaser =
    document.getElementById("closePulsaTeaser");

const pulsaTeaserVideo =
    document.getElementById("pulsaTeaserVideo");


if (openPulsaTeaser && pulsaTeaserModal) {

    openPulsaTeaser.addEventListener("click", () => {

        openModal(
            pulsaTeaserModal,
            pulsaTeaserVideo
        );

    });

}


if (closePulsaTeaser && pulsaTeaserModal) {

    closePulsaTeaser.addEventListener("click", () => {

        closeModal(
            pulsaTeaserModal,
            pulsaTeaserVideo
        );

    });

}


if (pulsaTeaserModal) {

    pulsaTeaserModal.addEventListener("click", (event) => {

        if (event.target === pulsaTeaserModal) {

            closeModal(
                pulsaTeaserModal,
                pulsaTeaserVideo
            );

        }

    });

}


// =====================================
// 06b — PULSA
// PUB / CAMPAIGN VIDEO
// =====================================

const pulsaPubModal =
    document.getElementById("pulsaPubModal");

const openPulsaPub =
    document.getElementById("openPulsaPub");

const closePulsaPub =
    document.getElementById("closePulsaPub");

const pulsaPubVideo =
    document.getElementById("pulsaPubVideo");


if (openPulsaPub && pulsaPubModal) {

    openPulsaPub.addEventListener("click", () => {

        openModal(
            pulsaPubModal,
            pulsaPubVideo
        );

    });

}


if (closePulsaPub && pulsaPubModal) {

    closePulsaPub.addEventListener("click", () => {

        closeModal(
            pulsaPubModal,
            pulsaPubVideo
        );

    });

}


if (pulsaPubModal) {

    pulsaPubModal.addEventListener("click", (event) => {

        if (event.target === pulsaPubModal) {

            closeModal(
                pulsaPubModal,
                pulsaPubVideo
            );

        }

    });

}


// =====================================
// 07 — ESC KEY
// CLOSE WHATEVER MODAL IS OPEN
// =====================================

document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") return;


    if (
        artemiaModal &&
        artemiaModal.classList.contains("open")
    ) {

        closeModal(
            artemiaModal,
            artemiaFullVideo
        );

    }


    if (
        artemiaWorkModal &&
        artemiaWorkModal.classList.contains("open")
    ) {

        closeModal(
            artemiaWorkModal,
            artemiaWorkVideo
        );

    }


    if (
        fingerprintModal &&
        fingerprintModal.classList.contains("open")
    ) {

        closeModal(
            fingerprintModal,
            fingerprintVideo
        );

    }


    if (
        pulsaTeaserModal &&
        pulsaTeaserModal.classList.contains("open")
    ) {

        closeModal(
            pulsaTeaserModal,
            pulsaTeaserVideo
        );

    }

});


// =====================================
// 08 — LOOP VIDEOS
// PAUSE WHEN OFF SCREEN
// =====================================

const loopVideos = document.querySelectorAll(
    ".artemia-loop-video, .fingerprint-loop-video, .pulsa-loop-video"
);


const videoObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            const video = entry.target;

            if (entry.isIntersecting) {

                video.play().catch(() => {
                    // Browser may block autoplay.
                });

            } else {

                video.pause();

            }

        });

    },
    {
        threshold: 0.15
    }
);


loopVideos.forEach((video) => {

    videoObserver.observe(video);

});


// =====================================
// 09 — SAFETY
// PAUSE MODAL VIDEOS IF TAB IS HIDDEN
// =====================================

document.addEventListener(
    "visibilitychange",
    () => {

        if (!document.hidden) return;

        [
            artemiaFullVideo,
            artemiaWorkVideo,
            fingerprintVideo,
            pulsaTeaserVideo
        ].forEach((video) => {

            if (video) {
                video.pause();
            }

        });

    }
);