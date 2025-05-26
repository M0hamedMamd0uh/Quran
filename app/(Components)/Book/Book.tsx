"use client";
import { useContext, useEffect, useState } from "react";
import "./Book.scss";
import Image from "next/image";
import { browseQuranContext } from "@/app/Context/Browse_Quran";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
export default function Book() {
  const {
    prevPageNum,
    setPrevPageNum,
    nextPageNum,
    setNextPageNum,
    customPageNum,
    setCustomPageNum,
    setRightSide,
    setLeftSide,

    currentPageNum,
    setCurrentPageNum,
    next_S_M_PageNum,
    setNext_S_M_PageNum,
    prev_S_M_PageNum,
    setPrev_S_M_PageNum,

    setActivePageSM,

    rightSide,
    leftSide,
  } = useContext(browseQuranContext);

  function nextPaper_Prev() {
    let prev_paper = document.getElementById("prev-paper") as HTMLDivElement;
    let next_paper = document.getElementById("next-paper") as HTMLDivElement;

    let custom_paper = document.getElementById(
      "custom-paper"
    ) as HTMLDivElement;

    let prev_front = document.getElementById("prev_front") as HTMLDivElement;
    let prev_back = document.getElementById("prev_back") as HTMLDivElement;

    if (next_paper.style.transform === "rotateY(180deg)") {
      next_paper.style.transformOrigin = "left center !important";
      prev_paper.style.transformOrigin = "left";
      next_paper.style.transform = "rotateY(0)";
    } else {
      next_paper.style.transformOrigin = "left center !important";
      prev_paper.style.transformOrigin = "left ";
      next_paper.style.transform = "rotateY(-180deg)";
    }

    next_paper.style.transition = ".5s";

    prev_paper.style.transform = `rotateY(0)`;
    prev_paper.style.left = `50%`;
    prev_paper.style.transition = "0s";

    prev_front.style.transform = "rotateY(180deg)";
    prev_back.style.transform = "";

    custom_paper.style.zIndex = "initial";
    prev_paper.style.zIndex = "initial";
    next_paper.style.zIndex = "2";

    prev_paper.dataset.type = "prev";
    next_paper.dataset.type = "next";
  }
  function nextPaper_Next() {
    let prev_paper = document.getElementById("prev-paper") as HTMLDivElement;
    let next_paper = document.getElementById("next-paper") as HTMLDivElement;

    let custom_paper = document.getElementById(
      "custom-paper"
    ) as HTMLDivElement;

    let custom_front = document.getElementById(
      "custom_front"
    ) as HTMLDivElement;
    let custom_back = document.getElementById("custom_back") as HTMLDivElement;

    if (next_paper.style.transform === "rotateY(0deg)") {
      next_paper.style.transformOrigin = "right center !important";
      custom_paper.style.transformOrigin = "right ";
      next_paper.style.transform = "rotateY(180deg)";
    } else {
      next_paper.style.transformOrigin = "left !important";
      custom_paper.style.transformOrigin = "right";
      next_paper.style.transform = "rotateY(0deg)";
    }

    next_paper.style.transition = ".5s";

    custom_paper.style.transform = `rotateY(0)`;
    custom_paper.style.left = `8px`;
    custom_paper.style.transition = "0s";

    custom_front.style.transform = "";
    custom_back.style.transform = "rotateY(180deg)";

    custom_paper.style.zIndex = "initial";
    prev_paper.style.zIndex = "initial";
    next_paper.style.zIndex = "2";

    next_paper.dataset.type = "prev";
    custom_paper.dataset.type = "next";
  }
  function nextPaper() {
    let next_paper = document.getElementById("next-paper") as HTMLDivElement;

    const currentPage = document.getElementById(
      "current-page"
    ) as HTMLDivElement;
    const nextPage = document.getElementById("next-page") as HTMLDivElement;

    if (next_paper.dataset.type === "prev") {
      if (nextPageNum === 1) {
        return;
      } else {
        setRightSide("prev");
        setLeftSide("next");
        setPrevPageNum(nextPageNum - 2);

        if (currentPage.dataset.active === "active") {
          setCurrentPageNum(nextPageNum);
        } else if (nextPage.dataset.active === "active") {
          setNext_S_M_PageNum(nextPageNum);
        } else {
          setPrev_S_M_PageNum(nextPageNum);
        }
      }

      nextPaper_Prev();
    } else {
      if (nextPageNum === 607) {
        return;
      } else {
        setRightSide("next");
        setLeftSide("custom");
        setCustomPageNum(nextPageNum + 2);

        if (currentPage.dataset.active === "active") {
          setCurrentPageNum(nextPageNum + 1);
        } else if (nextPage.dataset.active === "active") {
          setNext_S_M_PageNum(nextPageNum + 1);
        } else {
          setPrev_S_M_PageNum(nextPageNum + 1);
        }
      }

      nextPaper_Next();
    }
  }

  function prevPaper_Prev() {
    let prev_paper = document.getElementById("prev-paper") as HTMLDivElement;
    let next_paper = document.getElementById("next-paper") as HTMLDivElement;
    let custom_paper = document.getElementById(
      "custom-paper"
    ) as HTMLDivElement;

    let custom_front = document.getElementById(
      "custom_front"
    ) as HTMLDivElement;
    let custom_back = document.getElementById("custom_back") as HTMLDivElement;

    if (prev_paper.style.transform === "rotateY(0deg)") {
      prev_paper.style.transformOrigin = "left center !important";
      custom_paper.style.transformOrigin = "left ";
      prev_paper.style.transform = "rotateY(-180deg)";
    } else {
      prev_paper.style.transformOrigin = "left center !important";
      custom_paper.style.transformOrigin = "left ";
      prev_paper.style.transform = "rotateY(0deg)";
    }

    prev_paper.style.transition = ".5s";

    custom_paper.style.transform = `rotateY(0)`;
    custom_paper.style.left = `50%`;
    custom_paper.style.transition = "0s";

    custom_front.style.transform = "rotateY(180deg)";
    custom_back.style.transform = "";

    next_paper.style.zIndex = "initial";
    custom_paper.style.zIndex = "initial";
    prev_paper.style.zIndex = "2";

    prev_paper.dataset.type = "next";
    custom_paper.dataset.type = "prev";
  }
  function prevPaper_Next() {
    let prev_paper = document.getElementById("prev-paper") as HTMLDivElement;
    let next_paper = document.getElementById("next-paper") as HTMLDivElement;
    let custom_paper = document.getElementById(
      "custom-paper"
    ) as HTMLDivElement;

    let next_front = document.getElementById("next_front") as HTMLDivElement;
    let next_back = document.getElementById("next_back") as HTMLDivElement;

    if (prev_paper.style.transform === "rotateY(-180deg)") {
      prev_paper.style.transformOrigin = "right center !important";
      next_paper.style.transformOrigin = "right";
      prev_paper.style.transform = "rotateY(0)";
    } else {
      prev_paper.style.transformOrigin = "right center !important";
      next_paper.style.transformOrigin = "right ";
      prev_paper.style.transform = "rotateY(180deg)";
    }

    prev_paper.style.transition = ".5s";

    next_paper.style.transform = `rotateY(0)`;
    next_paper.style.left = `8px`;
    next_paper.style.transition = "0s";

    next_front.style.transform = "";
    next_back.style.transform = "rotateY(180deg)";

    next_paper.style.zIndex = "initial";
    custom_paper.style.zIndex = "initial";
    prev_paper.style.zIndex = "2";

    prev_paper.dataset.type = "prev";
    next_paper.dataset.type = "next";
  }
  function prevPaper() {
    let prev_paper = document.getElementById("prev-paper") as HTMLDivElement;
    const currentPage = document.getElementById(
      "current-page"
    ) as HTMLDivElement;
    const nextPage = document.getElementById("next-page") as HTMLDivElement;

    if (prev_paper.dataset.type === "prev") {
      if (prevPageNum === 1) {
        return;
      } else {
        setRightSide("custom");
        setLeftSide("prev");
        setCustomPageNum(prevPageNum - 2);

        if (currentPage.dataset.active === "active") {
          setCurrentPageNum(prevPageNum);
        } else if (nextPage.dataset.active === "active") {
          setNext_S_M_PageNum(prevPageNum);
        } else {
          setPrev_S_M_PageNum(prevPageNum);
        }
      }

      prevPaper_Prev();
    } else {
      if (prevPageNum === 607) {
        return;
      } else {
        setRightSide("prev");
        setLeftSide("next");
        setNextPageNum(prevPageNum + 2);

        if (currentPage.dataset.active === "active") {
          setCurrentPageNum(prevPageNum + 1);
        } else if (nextPage.dataset.active === "active") {
          setNext_S_M_PageNum(prevPageNum + 1);
        } else {
          setPrev_S_M_PageNum(prevPageNum + 1);
        }
      }

      prevPaper_Next();
    }
  }

  function customPaper_Prev() {
    let prev_paper = document.getElementById("prev-paper") as HTMLDivElement;
    let next_paper = document.getElementById("next-paper") as HTMLDivElement;
    let custom_paper = document.getElementById(
      "custom-paper"
    ) as HTMLDivElement;

    let next_front = document.getElementById("next_front") as HTMLDivElement;
    let next_back = document.getElementById("next_back") as HTMLDivElement;

    if (custom_paper.style.transform === "rotateY(180deg)") {
      custom_paper.style.transformOrigin = "left center !important";
      next_paper.style.transformOrigin = "left";
      custom_paper.style.transform = "rotateY(0)";
    } else {
      custom_paper.style.transformOrigin = "left center !important";
      next_paper.style.transformOrigin = "left ";
      custom_paper.style.transform = "rotateY(-180deg)";
    }

    custom_paper.style.transition = ".5s";

    next_paper.style.transform = `rotateY(0)`;
    next_paper.style.left = "50%";
    next_paper.style.transition = "0s";

    next_front.style.transform = "rotateY(180deg)";
    next_back.style.transform = "";

    next_paper.style.zIndex = "initial";
    prev_paper.style.zIndex = "initial";
    custom_paper.style.zIndex = "2";

    custom_paper.dataset.type = "next";
    next_paper.dataset.type = "prev";
  }
  function customPaper_Next() {
    let prev_paper = document.getElementById("prev-paper") as HTMLDivElement;
    let next_paper = document.getElementById("next-paper") as HTMLDivElement;
    let custom_paper = document.getElementById(
      "custom-paper"
    ) as HTMLDivElement;

    let prev_front = document.getElementById("prev_front") as HTMLDivElement;
    let prev_back = document.getElementById("prev_back") as HTMLDivElement;

    if (custom_paper.style.transform === "rotateY(0deg)") {
      custom_paper.style.transformOrigin = "right center important";
      prev_paper.style.transformOrigin = "right ";
      custom_paper.style.transform = "rotateY(180deg)";
    } else {
      custom_paper.style.transformOrigin = "left !important";
      prev_paper.style.transformOrigin = "left ";
      custom_paper.style.transform = "rotateY(0deg)";
    }

    custom_paper.style.transition = ".5s";

    prev_paper.style.transform = `rotateY(0)`;
    prev_paper.style.left = `8px`;
    prev_paper.style.transition = "0s";

    prev_front.style.transform = "";
    prev_back.style.transform = "rotateY(180deg)";

    next_paper.style.zIndex = "initial";
    prev_paper.style.zIndex = "initial";
    custom_paper.style.zIndex = "2";

    custom_paper.dataset.type = "prev";
    prev_paper.style.transformOrigin = "right center";
    prev_paper.dataset.type = "next";
  }
  function customPaper() {
    let custom_paper = document.getElementById(
      "custom-paper"
    ) as HTMLDivElement;

    const currentPage = document.getElementById(
      "current-page"
    ) as HTMLDivElement;
    const nextPage = document.getElementById("next-page") as HTMLDivElement;

    if (custom_paper.dataset.type === "prev") {
      if (customPageNum === 1) {
        return;
      } else {
        setRightSide("next");
        setLeftSide("custom");
        setNextPageNum(customPageNum - 2);

        if (currentPage.dataset.active === "active") {
          setCurrentPageNum(customPageNum);
        } else if (nextPage.dataset.active === "active") {
          setNext_S_M_PageNum(customPageNum);
        } else {
          setPrev_S_M_PageNum(customPageNum);
        }
      }

      customPaper_Prev();
    } else {
      if (customPageNum === 607) {
        return;
      } else {
        setRightSide("custom");
        setLeftSide("prev");
        setPrevPageNum(customPageNum + 2);

        if (currentPage.dataset.active === "active") {
          setCurrentPageNum(customPageNum + 1);
        } else if (nextPage.dataset.active === "active") {
          setNext_S_M_PageNum(customPageNum + 1);
        } else {
          setPrev_S_M_PageNum(customPageNum + 1);
        }
      }

      customPaper_Next();
    }
  }

  function handleNextPage() {
    if (leftSide === "next") {
      nextPaper();
    } else if (leftSide === "prev") {
      prevPaper();
    } else {
      customPaper();
    }
  }

  function handlePreviousPage() {
    if (rightSide === "next") {
      nextPaper();
    } else if (rightSide === "prev") {
      prevPaper();
    } else {
      customPaper();
    }
  }

  useEffect(() => {
    // console.log(prevPageNum)
    // console.log(nextPageNum)
    // console.log(customPageNum)

    if (rightSide === "next" && leftSide === "custom") {
      setPrevPageNum(nextPageNum);
      setNextPageNum(customPageNum);
      setCurrentPageNum(nextPageNum + 1);
    } else if (rightSide === "prev" && leftSide === "next") {
      setPrevPageNum(prevPageNum);
      setNextPageNum(nextPageNum);
      setCurrentPageNum(prevPageNum + 1);
    } else {
      setPrevPageNum(customPageNum);
      setNextPageNum(prevPageNum);
      setCurrentPageNum(customPageNum + 1);
    }

    // for selectbox of surah
    setRightSide("prev");
    setLeftSide("next");
  }, []);

  function handleNextPageInSmallMedia() {
    const currentPage = document.getElementById(
      "current-page"
    ) as HTMLDivElement;
    const nextPage = document.getElementById("next-page") as HTMLDivElement;
    const prevPage = document.getElementById("prev-page") as HTMLDivElement;

    if (currentPage.dataset.active === "active") {
      if (currentPageNum === 607) return;
      else {
        setNext_S_M_PageNum(currentPageNum + 1);
        setActivePageSM("next");

        // for Set Large Screen
        if (rightSide === "next" && leftSide === "custom") {
          if (currentPageNum % 2 === 0) {
            setNextPageNum(currentPageNum - 1);
            setCustomPageNum(currentPageNum + 1);
          } else {
            setNextPageNum(currentPageNum);
            setCustomPageNum(currentPageNum + 2);
          }
        } else if (rightSide === "prev" && leftSide === "next") {
          if (currentPageNum % 2 === 0) {
            setPrevPageNum(currentPageNum - 1);
            setNextPageNum(currentPageNum + 1);
          } else {
            setPrevPageNum(currentPageNum);
            setNextPageNum(currentPageNum + 2);
          }
        } else {
          if (currentPageNum % 2 === 0) {
            setCustomPageNum(currentPageNum - 1);
            setPrevPageNum(currentPageNum + 1);
          } else {
            setCustomPageNum(currentPageNum);
            setPrevPageNum(currentPageNum + 2);
          }
        }
      }

      currentPage.style.transform = "rotateY(90deg)";
      currentPage.style.transition = ".8s";

      nextPage.style.transform = "rotateY(0)";
      nextPage.style.transition = "0s";
      prevPage.style.transform = "rotateY(-180deg)";
      prevPage.style.transition = "0s";

      currentPage.style.zIndex = "2";
      nextPage.style.zIndex = "initial";
      prevPage.style.zIndex = "initial";

      currentPage.dataset.active = "not-active";
      prevPage.dataset.active = "not-active";
      nextPage.dataset.active = "active";
    } else if (nextPage.dataset.active === "active") {
      if (next_S_M_PageNum === 607) return;
      else {
        setPrev_S_M_PageNum(next_S_M_PageNum + 1);
        setActivePageSM("prev");

        // for Set Large Screen
        if (rightSide === "next" && leftSide === "custom") {
          if (next_S_M_PageNum % 2 === 0) {
            setNextPageNum(next_S_M_PageNum - 1);
            setCustomPageNum(next_S_M_PageNum + 1);
          } else {
            setNextPageNum(next_S_M_PageNum);
            setCustomPageNum(next_S_M_PageNum + 2);
          }
        } else if (rightSide === "prev" && leftSide === "next") {
          if (next_S_M_PageNum % 2 === 0) {
            setPrevPageNum(next_S_M_PageNum - 1);
            setNextPageNum(next_S_M_PageNum + 1);
          } else {
            setPrevPageNum(next_S_M_PageNum);
            setNextPageNum(next_S_M_PageNum + 2);
          }
        } else {
          if (next_S_M_PageNum % 2 === 0) {
            setCustomPageNum(next_S_M_PageNum - 1);
            setPrevPageNum(next_S_M_PageNum + 1);
          } else {
            setCustomPageNum(next_S_M_PageNum);
            setPrevPageNum(next_S_M_PageNum + 2);
          }
        }
      }

      nextPage.style.transform = "rotateY(90deg)";
      nextPage.style.transition = ".8s";

      prevPage.style.transform = "rotateY(0)";
      prevPage.style.transition = "0s";
      currentPage.style.transform = "rotateY(-180deg)";
      currentPage.style.transition = "0s";

      currentPage.style.zIndex = "initial";
      prevPage.style.zIndex = "initial";
      nextPage.style.zIndex = "2";

      prevPage.dataset.active = "active";
      currentPage.dataset.active = "not-active";
      nextPage.dataset.active = "not-active";
    } else {
      if (prev_S_M_PageNum === 607) return;
      else {
        setCurrentPageNum(prev_S_M_PageNum + 1);
        setActivePageSM("current");

        // for Set Large Screen
        if (rightSide === "next" && leftSide === "custom") {
          if (prev_S_M_PageNum % 2 === 0) {
            setNextPageNum(prev_S_M_PageNum - 1);
            setCustomPageNum(prev_S_M_PageNum + 1);
          } else {
            setNextPageNum(prev_S_M_PageNum);
            setCustomPageNum(prev_S_M_PageNum + 2);
          }
        } else if (rightSide === "prev" && leftSide === "next") {
          if (prev_S_M_PageNum % 2 === 0) {
            setPrevPageNum(prev_S_M_PageNum - 1);
            setNextPageNum(prev_S_M_PageNum + 1);
          } else {
            setPrevPageNum(prev_S_M_PageNum);
            setNextPageNum(prev_S_M_PageNum + 2);
          }
        } else {
          if (prev_S_M_PageNum % 2 === 0) {
            setCustomPageNum(prev_S_M_PageNum - 1);
            setPrevPageNum(prev_S_M_PageNum + 1);
          } else {
            setCustomPageNum(prev_S_M_PageNum);
            setPrevPageNum(prev_S_M_PageNum + 2);
          }
        }
      }

      prevPage.style.transform = "rotateY(90deg)";
      prevPage.style.transition = ".8s";

      currentPage.style.transform = "rotateY(0)";
      currentPage.style.transition = "0s";
      nextPage.style.transform = "rotateY(-180deg)";
      nextPage.style.transition = "0s";

      currentPage.style.zIndex = "initial";
      nextPage.style.zIndex = "initial";
      prevPage.style.zIndex = "2";

      currentPage.dataset.active = "active";
      prevPage.dataset.active = "not-active";
      nextPage.dataset.active = "not-active";
    }
  }

  function handlePrevPageInSmallMedia() {
    const currentPage = document.getElementById(
      "current-page"
    ) as HTMLDivElement;
    const nextPage = document.getElementById("next-page") as HTMLDivElement;
    const prevPage = document.getElementById("prev-page") as HTMLDivElement;

    // if (currentPageNum === 1 || next_S_M_PageNum === 1 || prev_S_M_PageNum === 1 ) return
    if (currentPage.dataset.active === "active") {
      if (currentPageNum === 1) return;
      else {
        setPrev_S_M_PageNum(currentPageNum - 1);
        setActivePageSM("prev");

        if (currentPageNum === 2) {
          prevPage.style.transform = "rotateY(0)";
          prevPage.style.transition = ".8s";

          nextPage.style.transform = "rotateY(90deg)";
          nextPage.style.transition = "0s";
          currentPage.style.transform = "rotateY(0)";
          currentPage.style.transition = "0s";

          currentPage.style.zIndex = "initial";
          nextPage.style.zIndex = "initial";
          prevPage.style.zIndex = "2";

          prevPage.dataset.active = "active";
          currentPage.dataset.active = "not-active";
          nextPage.dataset.active = "not-active";
          return;
        } else {
          if (rightSide === "next" && leftSide === "custom") {
            if (currentPageNum % 2 === 0) {
              setNextPageNum(currentPageNum - 3);
              setCustomPageNum(currentPageNum - 1);
            } else {
              setNextPageNum(currentPageNum - 2);
              setCustomPageNum(currentPageNum);
            }
          } else if (rightSide === "prev" && leftSide === "next") {
            if (currentPageNum % 2 === 0) {
              setPrevPageNum(currentPageNum - 3);
              setNextPageNum(currentPageNum - 1);
            } else {
              setPrevPageNum(currentPageNum - 2);
              setNextPageNum(currentPageNum);
            }
          } else {
            if (currentPageNum % 2 === 0) {
              setCustomPageNum(currentPageNum - 3);
              setPrevPageNum(currentPageNum - 1);
            } else {
              setCustomPageNum(currentPageNum - 2);
              setPrevPageNum(currentPageNum);
            }
          }
        }
      }

      prevPage.style.transform = "rotateY(0)";
      prevPage.style.transition = ".8s";

      nextPage.style.transform = "rotateY(90deg)";
      nextPage.style.transition = "0s";
      currentPage.style.transform = "rotateY(0)";
      currentPage.style.transition = "0s";

      currentPage.style.zIndex = "initial";
      nextPage.style.zIndex = "initial";
      prevPage.style.zIndex = "2";

      prevPage.dataset.active = "active";
      currentPage.dataset.active = "not-active";
      nextPage.dataset.active = "not-active";
    } else if (nextPage.dataset.active === "active") {
      if (next_S_M_PageNum === 1) return;
      else {
        setCurrentPageNum(next_S_M_PageNum - 1);

        setActivePageSM("current");

        if (next_S_M_PageNum === 2) {
          currentPage.style.transform = "rotateY(0)";
          currentPage.style.transition = ".8s";

          prevPage.style.transform = "rotateY(90deg)";
          prevPage.style.transition = "0s";
          nextPage.style.transform = "rotateY(0)";
          nextPage.style.transition = "0s";

          currentPage.style.zIndex = "2";
          nextPage.style.zIndex = "initial";
          prevPage.style.zIndex = "initial";

          currentPage.dataset.active = "active";
          prevPage.dataset.active = "not-active";
          nextPage.dataset.active = "not-active";
          return;
        } else {
          if (rightSide === "next" && leftSide === "custom") {
            if (next_S_M_PageNum % 2 === 0) {
              setNextPageNum(next_S_M_PageNum - 3);
              setCustomPageNum(next_S_M_PageNum - 1);
            } else {
              setNextPageNum(next_S_M_PageNum - 2);
              setCustomPageNum(next_S_M_PageNum);
            }
          } else if (rightSide === "prev" && leftSide === "next") {
            if (next_S_M_PageNum % 2 === 0) {
              setPrevPageNum(next_S_M_PageNum - 3);
              setNextPageNum(next_S_M_PageNum - 1);
            } else {
              setPrevPageNum(next_S_M_PageNum - 2);
              setNextPageNum(next_S_M_PageNum);
            }
          } else {
            if (next_S_M_PageNum % 2 === 0) {
              setCustomPageNum(next_S_M_PageNum - 3);
              setPrevPageNum(next_S_M_PageNum - 1);
            } else {
              setCustomPageNum(next_S_M_PageNum - 2);
              setPrevPageNum(next_S_M_PageNum);
            }
          }
        }
      }

      currentPage.style.transform = "rotateY(0)";
      currentPage.style.transition = ".8s";

      prevPage.style.transform = "rotateY(90deg)";
      prevPage.style.transition = "0s";
      nextPage.style.transform = "rotateY(0)";
      nextPage.style.transition = "0s";

      currentPage.style.zIndex = "2";
      nextPage.style.zIndex = "initial";
      prevPage.style.zIndex = "initial";

      currentPage.dataset.active = "active";
      prevPage.dataset.active = "not-active";
      nextPage.dataset.active = "not-active";
    } else {
      if (prev_S_M_PageNum === 1) return;
      else {
        setNext_S_M_PageNum(prev_S_M_PageNum - 1);
        setActivePageSM("next");

        if (prev_S_M_PageNum === 2) {
          nextPage.style.transform = "rotateY(0)";
          nextPage.style.transition = ".8s";

          currentPage.style.transform = "rotateY(90deg)";
          currentPage.style.transition = "0s";
          prevPage.style.transform = "rotateY(0)";
          prevPage.style.transition = "0s";

          currentPage.style.zIndex = "initial";
          nextPage.style.zIndex = "2";
          prevPage.style.zIndex = "initial";

          currentPage.dataset.active = "not-active";
          prevPage.dataset.active = "not-active";
          nextPage.dataset.active = "active";
          return;
        } else {
          if (rightSide === "next" && leftSide === "custom") {
            if (prev_S_M_PageNum % 2 === 0) {
              setNextPageNum(prev_S_M_PageNum - 3);
              setCustomPageNum(prev_S_M_PageNum - 1);
            } else {
              setNextPageNum(prev_S_M_PageNum - 2);
              setCustomPageNum(prev_S_M_PageNum);
            }
          } else if (rightSide === "prev" && leftSide === "next") {
            if (prev_S_M_PageNum % 2 === 0) {
              setPrevPageNum(prev_S_M_PageNum - 3);
              setNextPageNum(prev_S_M_PageNum - 1);
            } else {
              setPrevPageNum(prev_S_M_PageNum - 2);
              setNextPageNum(prev_S_M_PageNum);
            }
          } else {
            if (prev_S_M_PageNum % 2 === 0) {
              setCustomPageNum(prev_S_M_PageNum - 3);
              setPrevPageNum(prev_S_M_PageNum - 1);
            } else {
              setCustomPageNum(prev_S_M_PageNum - 2);
              setPrevPageNum(prev_S_M_PageNum);
            }
          }
        }
      }

      nextPage.style.transform = "rotateY(0)";
      nextPage.style.transition = ".8s";

      currentPage.style.transform = "rotateY(90deg)";
      currentPage.style.transition = "0s";
      prevPage.style.transform = "rotateY(0)";
      prevPage.style.transition = "0s";

      currentPage.style.zIndex = "initial";
      nextPage.style.zIndex = "2";
      prevPage.style.zIndex = "initial";

      currentPage.dataset.active = "not-active";
      prevPage.dataset.active = "not-active";
      nextPage.dataset.active = "active";
    }
  }

  return (
    <>
      <div className="Quran_Large_Media">
        <div className="Quran-box mb-3">
          <div
            className="next-paper "
            id="next-paper"
            onClick={() => nextPaper()}
            data-type="next"
            style={{
              transformOrigin: "right center",
              transform: "rotateY(0deg)",
              left: "8px",
            }}
          >
            <div className="front" id="next_front">
              <Image
                loading="lazy"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={`https://cdn.qurango.net/Sura2/files/mobile/${nextPageNum}.jpg`}
                alt="quran"
                className="w-100"
              />
            </div>
            <div
              className="back"
              id="next_back"
              style={{
                transform: `rotateY(180deg)`,
              }}
            >
              <Image
                loading="lazy"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={`https://cdn.qurango.net/Sura2/files/mobile/${
                  nextPageNum === 607 ? nextPageNum : nextPageNum + 1
                }.jpg`}
                alt="quran"
                className="w-100"
              />
            </div>
          </div>
          <div
            className="prev-paper "
            id="prev-paper"
            data-type="prev"
            onClick={() => prevPaper()}
            style={{
              transformOrigin: "left center",
              transform: "rotateY(0deg)",
              left: "50%",
            }}
          >
            <div
              className="front"
              style={{
                transform: `rotateY(180deg)`,
              }}
              id="prev_front"
            >
              <Image
                loading="lazy"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={`https://cdn.qurango.net/Sura2/files/mobile/${
                  prevPageNum === 1 ? prevPageNum + 1 : prevPageNum
                }.jpg`}
                alt="quran"
                className="w-100"
              />
            </div>
            <div className="back" id="prev_back">
              <Image
                loading="lazy"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={`https://cdn.qurango.net/Sura2/files/mobile/${
                  prevPageNum === 607 ? prevPageNum : prevPageNum + 1
                }.jpg`}
                alt="quran"
                className="w-100"
              />
            </div>
          </div>

          <div
            className="custom-paper "
            id="custom-paper"
            onClick={() => customPaper()}
            data-type="next"
            style={{
              transformOrigin: "right center",
              transform: "rotateY(0deg)",
              left: "8px",
            }}
          >
            <div id="custom_front" className="front">
              <Image
                loading="lazy"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={`https://cdn.qurango.net/Sura2/files/mobile/${customPageNum}.jpg`}
                alt="quran"
                className="w-100"
              />
            </div>
            <div
              className="back"
              id="custom_back"
              style={{
                transform: `rotateY(180deg)`,
              }}
            >
              <Image
                loading="lazy"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={`https://cdn.qurango.net/Sura2/files/mobile/${
                  customPageNum === 607 ? customPageNum : customPageNum + 1
                }.jpg`}
                alt="quran"
                className="w-100"
              />
            </div>
          </div>
        </div>
        <div className="controls-buttons d-flex justify-content-center align-items-center flex-wrap   border border-1">
          <span
            className="d-flex justify-content-center align-items-center cursor-pointer p-1"
            onClick={() => handleNextPage()}
          >
            <GrFormPreviousLink /> Next
          </span>
          <span
            className="d-flex justify-content-center align-items-center cursor-pointer p-1"
            onClick={() => handlePreviousPage()}
          >
            Previous <GrFormNextLink />
          </span>
        </div>
      </div>
      <div className="Quran_Small_Media">
        <div className="Quran-box mb-3">
          <span
            id="nextPage"
            onClick={() => handleNextPageInSmallMedia()}
          ></span>
          <span
            id="prevPage"
            onClick={() => handlePrevPageInSmallMedia()}
          ></span>
          <div
            id="prev-page"
            data-active="not-active"
            style={{
              transformOrigin: "right center",
              transform: "rotateY(0deg)",
            }}
          >
            {/* Prev Page */}
            <Image
              loading="lazy"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={`https://cdn.qurango.net/Sura2/files/mobile/${prev_S_M_PageNum}.jpg`}
              alt="quran"
              className="w-100"
            />
          </div>
          <div
            id="current-page"
            data-active="active"
            style={{
              transformOrigin: "right center",
              transform: "rotateY(0deg)",
            }}
          >
            {/* Current Page */}
            <Image
              loading="lazy"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={`https://cdn.qurango.net/Sura2/files/mobile/${currentPageNum}.jpg`}
              alt="quran"
              className="w-100"
            />
          </div>
          <div
            id="next-page"
            data-active="not-active"
            style={{
              transformOrigin: "right center",
              transform: "rotateY(0deg)",
            }}
          >
            {/* Next Page */}
            <Image
              loading="lazy"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={`https://cdn.qurango.net/Sura2/files/mobile/${next_S_M_PageNum}.jpg`}
              alt="quran"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </>
  );
}
